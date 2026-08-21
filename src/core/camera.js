import * as THREE from 'three';

export class CameraManager {
  constructor() {
    this.fov = window.innerWidth < 768 ? 50 : 38;
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    // Initial Camera Position centered on the watch
    this.camera.position.set(0, 0, 8.2);
    this.targetPosition = new THREE.Vector3(0, 0, 8.2);
    this.lookAtTarget = new THREE.Vector3(0, 0, 0);

    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.fov = window.innerWidth < 768 ? 50 : 38;
    this.camera.fov = this.fov;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  update(delta) {
    this.camera.lookAt(this.lookAtTarget);
  }
}
