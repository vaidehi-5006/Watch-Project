import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

export class StudioScene {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.initRenderer();
    this.initLighting();
    this.loadEnvironment();

    window.addEventListener('resize', this.onResize.bind(this));
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  initLighting() {
    // Studio Ambient Light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(this.ambientLight);

    // Studio Main Key Light
    this.keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    this.keyLight.position.set(5, 8, 7);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.width = 2048;
    this.keyLight.shadow.mapSize.height = 2048;
    this.keyLight.shadow.bias = -0.0001;
    this.scene.add(this.keyLight);

    // Studio Rim Light (Metallic Specular Highlights)
    this.rimLight = new THREE.DirectionalLight(0xffffff, 4.0);
    this.rimLight.position.set(-6, 6, -5);
    this.scene.add(this.rimLight);

    // Studio Fill Light
    this.fillLight = new THREE.DirectionalLight(0xf0f4f8, 2.0);
    this.fillLight.position.set(-5, -4, 6);
    this.scene.add(this.fillLight);

    // Overhead Light
    this.topLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.topLight.position.set(0, 10, 0);
    this.scene.add(this.topLight);
  }

  loadEnvironment() {
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    const exrLoader = new EXRLoader();
    exrLoader.load('/assets/envmap-kW4EmG7W.exr', (texture) => {
      const exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
      this.scene.environment = exrCubeRenderTarget.texture;
      pmremGenerator.dispose();
      texture.dispose();
    }, undefined, (err) => {
      console.warn('EXR environment fallback:', err);
    });
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  render(camera) {
    this.renderer.render(this.scene, camera);
  }
}
