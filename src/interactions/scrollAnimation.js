import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimationTimeline {
  constructor(watchModel, cameraManager, orbitController) {
    this.watchModel = watchModel;
    this.cameraManager = cameraManager;
    this.orbitController = orbitController;

    this.annotations = {
      crystal: document.getElementById('anno-crystal'),
      bezel: document.getElementById('anno-bezel'),
      dial: document.getElementById('anno-dial'),
      gears: document.getElementById('anno-gears'),
      escapement: document.getElementById('anno-escapement'),
      caseback: document.getElementById('anno-caseback')
    };

    this.scrollProgressBar = document.getElementById('scroll-bar');
    this.sectionNumIndicator = document.getElementById('current-section-num');
    this.dragHint = document.getElementById('drag-hint');

    this.toggleAnnotations(false);
    this.initTimeline();
  }

  initTimeline() {
    const watch = this.watchModel.group;
    const camera = this.cameraManager.camera;

    // Overall Master Scroll Timeline
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#app-content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          // Update scroll indicator bar
          if (this.scrollProgressBar) {
            this.scrollProgressBar.style.setProperty('--scroll-progress', `${self.progress * 100}%`);
          }

          // Section number indicator
          const sec = Math.min(5, Math.floor(self.progress * 5) + 1);
          if (this.sectionNumIndicator) {
            this.sectionNumIndicator.textContent = `0${sec}`;
          }

          // Enable/disable interactive 360 orbit controller in customizer section (last 15% of scroll)
          if (self.progress > 0.88) {
            document.body.classList.add('canvas-interactive');
            this.orbitController.setActive(true);
            if (this.dragHint) this.dragHint.classList.remove('hidden');
          } else {
            document.body.classList.remove('canvas-interactive');
            this.orbitController.setActive(false);
            if (this.dragHint) this.dragHint.classList.add('hidden');
          }
        }
      }
    });

    // Helper object for tweening exploded view progress
    const explodedState = { progress: 0 };

    // SECTION 1 -> 2: HERO TO DIAL & SAPPHIRE CLOSE-UP
    masterTl
      .fromTo(watch.position, 
        { x: 0, y: -0.1, z: 0 },
        { x: 1.2, y: 0, z: 1.4, ease: 'power2.inOut', duration: 2 },
        0
      )
      .fromTo(watch.rotation,
        { x: 0.1, y: -0.15, z: 0.02 },
        { x: 0.35, y: 0.45, z: -0.15, ease: 'power2.inOut', duration: 2 },
        0
      );

    // SECTION 2 -> 3: TRANSITION INTO EXPLODED DECONSTRUCTED VIEW
    masterTl
      .to(watch.position, {
        x: 0,
        y: 0,
        z: 0.2,
        ease: 'power2.inOut',
        duration: 3
      }, 2)
      .to(watch.rotation, {
        x: 0.65,
        y: -0.55,
        z: 0.25,
        ease: 'power2.inOut',
        duration: 3
      }, 2)
      .to(explodedState, {
        progress: 1,
        ease: 'power2.inOut',
        duration: 3,
        onUpdate: () => {
          this.watchModel.setExplodedProgress(explodedState.progress);
        }
      }, 2);

    // Fade in Annotations during exploded view only
    ScrollTrigger.create({
      trigger: '#exploded-section',
      start: 'top 40%',
      end: 'bottom 60%',
      onEnter: () => this.toggleAnnotations(true),
      onLeave: () => this.toggleAnnotations(false),
      onEnterBack: () => this.toggleAnnotations(true),
      onLeaveBack: () => this.toggleAnnotations(false)
    });

    // SECTION 3 -> 4: REASSEMBLE & ROTATE TO BACK EXHIBITION CASEBACK
    masterTl
      .to(explodedState, {
        progress: 0,
        ease: 'power2.inOut',
        duration: 2.5,
        onUpdate: () => {
          this.watchModel.setExplodedProgress(explodedState.progress);
        }
      }, 5)
      .to(watch.position, {
        x: -1.2,
        y: 0,
        z: 1.2,
        ease: 'power2.inOut',
        duration: 2.5
      }, 5)
      .to(watch.rotation, {
        x: 0.1,
        y: Math.PI + 0.25, // Flip 180 degrees to show caseback & automatic rotor
        z: -0.1,
        ease: 'power2.inOut',
        duration: 2.5
      }, 5);

    // SECTION 4 -> 5: TRANSITION TO BESPOKE CUSTOMIZER STUDIO
    masterTl
      .to(watch.position, {
        x: -1.3,
        y: 0,
        z: 0.6,
        ease: 'power2.inOut',
        duration: 2.5
      }, 7.5)
      .to(watch.rotation, {
        x: 0.2,
        y: Math.PI * 2 - 0.2, // Turn back to front view
        z: 0,
        ease: 'power2.inOut',
        duration: 2.5
      }, 7.5);
  }

  toggleAnnotations(visible) {
    Object.values(this.annotations).forEach((el, index) => {
      if (el) {
        if (visible) {
          setTimeout(() => el.classList.add('visible'), index * 80);
        } else {
          el.classList.remove('visible');
        }
      }
    });
  }
}
