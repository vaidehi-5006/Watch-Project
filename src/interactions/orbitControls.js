import * as THREE from 'three';

export class CustomOrbitController {
  constructor(watchModel, domElement) {
    this.watchModel = watchModel;
    this.domElement = domElement;
    this.isActive = false;

    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    
    this.rotationVelocity = { x: 0, y: 0 };
    this.targetRotation = { x: 0.2, y: 0, z: 0 };
    this.currentRotation = { x: 0.2, y: 0, z: 0 };

    this.initEvents();
  }

  initEvents() {
    this.domElement.addEventListener('pointerdown', this.onPointerDown.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));

    // Touch support
    this.domElement.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
    window.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
    window.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  setActive(active) {
    this.isActive = active;
    if (!active) {
      this.isDragging = false;
    }
  }

  reset() {
    this.targetRotation.x = 0.2;
    this.targetRotation.y = 0;
    this.targetRotation.z = 0;
    this.rotationVelocity.x = 0;
    this.rotationVelocity.y = 0;
  }

  onPointerDown(e) {
    if (!this.isActive) return;
    this.isDragging = true;
    this.previousMousePosition = { x: e.clientX, y: e.clientY };
    this.rotationVelocity = { x: 0, y: 0 };
  }

  onPointerMove(e) {
    if (!this.isActive || !this.isDragging) return;

    const deltaX = e.clientX - this.previousMousePosition.x;
    const deltaY = e.clientY - this.previousMousePosition.y;

    this.targetRotation.y += deltaX * 0.008;
    this.targetRotation.x += deltaY * 0.008;

    // Clamp vertical tilt so it doesn't flip completely upside down
    this.targetRotation.x = THREE.MathUtils.clamp(this.targetRotation.x, -Math.PI / 2.2, Math.PI / 2.2);

    this.rotationVelocity = {
      x: deltaY * 0.008,
      y: deltaX * 0.008
    };

    this.previousMousePosition = { x: e.clientX, y: e.clientY };
  }

  onPointerUp() {
    this.isDragging = false;
  }

  onTouchStart(e) {
    if (!this.isActive || e.touches.length === 0) return;
    this.isDragging = true;
    this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }

  onTouchMove(e) {
    if (!this.isActive || !this.isDragging || e.touches.length === 0) return;
    e.preventDefault();

    const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
    const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

    this.targetRotation.y += deltaX * 0.008;
    this.targetRotation.x += deltaY * 0.008;
    this.targetRotation.x = THREE.MathUtils.clamp(this.targetRotation.x, -Math.PI / 2.2, Math.PI / 2.2);

    this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }

  onTouchEnd() {
    this.isDragging = false;
  }

  update(delta) {
    if (!this.isActive) return;

    // Apply inertia damping when not dragging
    if (!this.isDragging) {
      this.targetRotation.y += this.rotationVelocity.y;
      this.targetRotation.x += this.rotationVelocity.x;
      this.rotationVelocity.x *= 0.92;
      this.rotationVelocity.y *= 0.92;
    }

    // Smooth interpolation to target rotation
    this.currentRotation.x = THREE.MathUtils.lerp(this.currentRotation.x, this.targetRotation.x, 0.1);
    this.currentRotation.y = THREE.MathUtils.lerp(this.currentRotation.y, this.targetRotation.y, 0.1);
    this.currentRotation.z = THREE.MathUtils.lerp(this.currentRotation.z, this.targetRotation.z, 0.1);

    this.watchModel.group.rotation.x = this.currentRotation.x;
    this.watchModel.group.rotation.y = this.currentRotation.y;
    this.watchModel.group.rotation.z = this.currentRotation.z;
  }
}
