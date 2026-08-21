import * as THREE from 'three';
import { StudioScene } from './core/scene.js';
import { CameraManager } from './core/camera.js';
import { WatchModel } from './components/watchModel.js';
import { SmoothScroll } from './utils/smoothScroll.js';
import { AudioManager } from './interactions/audioManager.js';
import { CustomOrbitController } from './interactions/orbitControls.js';
import { CustomizerUI } from './interactions/customizer.js';
import { ScrollAnimationTimeline } from './interactions/scrollAnimation.js';

class App {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    this.loader = document.getElementById('loader');
    this.loaderPercent = document.getElementById('loader-percent');
    this.loaderProgressCircle = document.querySelector('.loader-progress-circle');

    this.clock = new THREE.Clock();

    this.init();
  }

  async init() {
    // 1. Initialize Scene & Camera
    this.studioScene = new StudioScene(this.canvas);
    this.cameraManager = new CameraManager();

    // 2. Build 3D Watch Assembly
    this.watchModel = new WatchModel();
    this.studioScene.scene.add(this.watchModel.group);

    // 3. Initialize Audio Synthesizer
    this.audioManager = new AudioManager();
    this.initAudioToggle();

    // 4. Initialize 360 Drag Controller
    this.orbitController = new CustomOrbitController(this.watchModel, document.getElementById('canvas-container'));

    // 5. Initialize Customizer UI
    this.customizerUI = new CustomizerUI(this.watchModel, this.orbitController, this.audioManager);

    // 6. Initialize Smooth Scroll & GSAP ScrollTrigger
    this.smoothScroll = new SmoothScroll();
    this.scrollTimeline = new ScrollAnimationTimeline(this.watchModel, this.cameraManager, this.orbitController);

    // 7. Run Preloader Animation & Asset Initialization
    await this.runPreloader();

    // 8. Start Real-time 60fps Render Loop
    this.animate();
  }

  initAudioToggle() {
    const audioBtn = document.getElementById('audio-toggle');
    const iconOn = audioBtn.querySelector('.sound-icon-on');
    const iconOff = audioBtn.querySelector('.sound-icon-off');

    audioBtn.addEventListener('click', () => {
      const isSoundOn = this.audioManager.toggle();
      if (isSoundOn) {
        iconOn.classList.remove('hidden');
        iconOff.classList.add('hidden');
      } else {
        iconOn.classList.add('hidden');
        iconOff.classList.remove('hidden');
      }
    });
  }

  runPreloader() {
    return new Promise((resolve) => {
      let progress = 0;
      const circumference = 2073; // 2 * PI * 330

      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 6;
        if (progress > 100) progress = 100;

        // Update percent text
        if (this.loaderPercent) {
          this.loaderPercent.textContent = `${progress}%`;
        }

        // Update circular SVG stroke
        if (this.loaderProgressCircle) {
          const offset = circumference - (progress / 100) * circumference;
          this.loaderProgressCircle.style.strokeDashoffset = `${offset}`;
        }

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (this.loader) {
              this.loader.classList.add('fade-out');
            }
            resolve();
          }, 400);
        }
      }, 50);
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Update Watch Internal Mechanical Animations (Hands, Balance wheel, Gears, Rotor)
    this.watchModel.update(delta, elapsedTime);

    // 2. Update Orbit Controller if active in customizer view
    this.orbitController.update(delta);

    // 3. Update Camera LookAt
    this.cameraManager.update(delta);

    // 4. Render 3D Scene
    this.studioScene.render(this.cameraManager.camera);
  }
}

// Boot application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
