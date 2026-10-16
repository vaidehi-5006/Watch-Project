/**
 * heroWatch.js - Option A: Direct Original 3D Model Bridge
 * Connects the Boutique Shop Hero Section directly to the original 3D Watch Scene.
 * Uses the exact original 4 watch models from watchesGroup, displaying only ONE watch
 * at a time (turn-by-turn) in the right-side hero showcase area.
 * Includes interactive mouse-cursor tracking (parallax look-at) and right-aligned placement.
 */

class HeroWatchBridge {
  constructor() {
    this.container = null;
    this.canvasWrapper = null;
    this.isShopActive = false;
    this.currentIndex = 0; // 0: Steel, 1: Midnight DLC, 2: Gold, 3: Rose

    this.baseRotationY = 0;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.idleTimer = 0;
    this.animId = null;

    // Mouse-cursor tracking for dynamic arrow look-at
    this.mouse = { x: 0, y: 0 };
    this.targetMouse = { x: 0, y: 0 };

    this.indexMap = {
      steel: 0,
      midnight: 1,
      gold: 2,
      rose: 3
    };

    // Track mouse movement across the viewport
    window.addEventListener('mousemove', (e) => {
      if (!this.isShopActive) return;
      // Normalized coordinates -1 (left) to 1 (right)
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      this.targetMouse.x = nx;
      this.targetMouse.y = ny;

      // Also forward coordinates to the original engine's tools.mouse
      const proj = this.project;
      if (proj && proj.tools && proj.tools.mouse && proj.tools.mouse.coordinates) {
        proj.tools.mouse.coordinates.webgl.x = nx;
        proj.tools.mouse.coordinates.webgl.y = ny;
        proj.tools.mouse.coordinates.dom.x = e.clientX;
        proj.tools.mouse.coordinates.dom.y = e.clientY;
      }
    });
  }

  get project() {
    return window.__WATCH_PROJECT__ || null;
  }

  get watchesGroup() {
    return this.project?.webgl?.scene?.watchesGroup || null;
  }

  get watchesList() {
    return this.watchesGroup?.watchesInsideGroup?.children || [];
  }

  get centralWatch() {
    return this.project?.webgl?.scene?.watch || null;
  }

  init(containerElement) {
    this.container = containerElement;
    this.canvasWrapper = document.getElementById('canvas-wrapper');
    this.setupInteractions();
  }

  onOpenShop() {
    this.isShopActive = false;
    this.stopLoop();
    this.canvasWrapper = document.getElementById('canvas-wrapper');

    if (this.canvasWrapper) {
      this.canvasWrapper.style.zIndex = '0';
      this.canvasWrapper.style.pointerEvents = 'none';
      this.canvasWrapper.style.visibility = 'hidden';
      this.canvasWrapper.style.clipPath = 'none';
      this.canvasWrapper.style.transform = 'translateY(0px)';
    }
  }

  onCloseShop() {
    this.isShopActive = false;
    this.stopLoop();

    if (this.canvasWrapper) {
      this.canvasWrapper.style.zIndex = '0';
      this.canvasWrapper.style.transform = 'translateY(0px)';
      this.canvasWrapper.style.opacity = '1';
      this.canvasWrapper.style.visibility = 'visible';
      this.canvasWrapper.style.clipPath = 'none';
      this.canvasWrapper.style.transition = '';
    }

    // Restore original watchesGroup layout for the 3D showcase page
    const list = this.watchesList;
    if (list && list.length) {
      list.forEach((child, s) => {
        child.visible = true;
        child.position.set(0, 0, 0);
        child.rotation.set(0, 0, 0);
        const watchMesh = child.children[0];
        if (watchMesh) {
          watchMesh.position.set((s - list.length / 2) * 1.5 + 0.75, 0, 0);
          watchMesh.scale.setScalar(25);
          watchMesh.rotation.set(0, 0, 0);
        }
      });
    }

    const cw = this.centralWatch;
    if (cw) {
      cw.visible = true;
      cw.position.set(0, 0, 0);
      cw.scale.setScalar(30);
    }
  }

  setColor(colorKey) {
    const idx = this.indexMap[colorKey];
    if (idx !== undefined) {
      this.currentIndex = idx;
    }
    this.baseRotationY = 0;
    this.idleTimer = 0;
  }

  updateScrollClipping() {
    if (!this.canvasWrapper || !this.isShopActive) return;
    const dashboard = document.getElementById('luxury-shop-dashboard');
    const scrollTop = dashboard ? dashboard.scrollTop : 0;

    this.canvasWrapper.style.transform = `translateY(${-scrollTop}px)`;

    const hero = document.getElementById('hero-section');
    const header = document.querySelector('.store-header');

    if (hero) {
      const heroRect = hero.getBoundingClientRect();
      const headerBottom = header ? header.getBoundingClientRect().bottom : 72;
      const clipTop = Math.max(headerBottom, heroRect.top);
      const clipBottom = Math.max(0, window.innerHeight - heroRect.bottom);

      // Strictly clip the canvas within the visible hero bounds, never allowing it over the navigation bar
      this.canvasWrapper.style.clipPath = `inset(${Math.round(clipTop)}px 0px ${Math.round(clipBottom)}px 0px)`;

      if (heroRect.bottom <= headerBottom + 10 || heroRect.top >= window.innerHeight) {
        this.canvasWrapper.style.opacity = '0';
        this.canvasWrapper.style.visibility = 'hidden';
      } else {
        this.canvasWrapper.style.opacity = '1';
        this.canvasWrapper.style.visibility = 'visible';
      }
    } else {
      if (scrollTop > 520) {
        this.canvasWrapper.style.opacity = '0';
        this.canvasWrapper.style.visibility = 'hidden';
      } else {
        this.canvasWrapper.style.opacity = '1';
        this.canvasWrapper.style.visibility = 'visible';
      }
    }
  }

  onScroll(scrollTop) {
    this.updateScrollClipping();
  }

  onResize() {
    // Handled dynamically in render loop
  }

  setupInteractions() {
    const stage = document.getElementById('hero-showcase-visual') || this.container;
    if (!stage) return;

    stage.style.cursor = 'grab';

    const onStart = (clientX, clientY) => {
      this.isDragging = true;
      stage.style.cursor = 'grabbing';
      this.previousMousePosition = { x: clientX, y: clientY };
      this.idleTimer = 0;
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      const deltaX = clientX - this.previousMousePosition.x;
      this.baseRotationY += deltaX * 0.012;
      this.previousMousePosition = { x: clientX, y: clientY };
      this.idleTimer = 0;
    };

    const onEnd = () => {
      this.isDragging = false;
      stage.style.cursor = 'grab';
    };

    stage.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', onEnd);
  }

  startLoop() {
    if (this.animId) cancelAnimationFrame(this.animId);
    let lastTime = performance.now();

    const loop = (now) => {
      if (!this.isShopActive) return;

      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Keep scroll position and clipping perfectly synchronized every frame
      this.updateScrollClipping();

      // 1. Hide the 5th central watch from the main page
      const cw = this.centralWatch;
      if (cw) {
        cw.visible = false;
      }

      // 2. Control watchesGroup: only show the active model, positioned nicely on the right
      const wg = this.watchesGroup;
      if (wg) {
        wg.visible = true;

        const list = this.watchesList;
        if (list && list.length) {
          const isMobile = window.innerWidth < 1024;
          // Position watch further to the right in the hero showcase stage
          const targetX = isMobile ? 0 : (window.innerWidth > 1400 ? 1.45 : 1.30);
          const targetY = isMobile ? -0.2 : 0.02;
          const targetScale = isMobile ? 24 : 33;

          // Smooth lerp mouse coordinates for dynamic cursor look-at
          this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.08;
          this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.08;

          // 3. Update original engine's intersectPoint so lookAt follows the cursor/arrow
          if (wg.intersectPoint && wg.intersectPoint.target) {
            wg.intersectPoint.target.x = targetX + this.mouse.x * 2.5;
            wg.intersectPoint.target.y = targetY + this.mouse.y * 2.0;
            if (wg.intersectPoint.value) {
              wg.intersectPoint.value.lerp(wg.intersectPoint.target, dt * 5);
            }
          }

          // Idle centering
          if (!this.isDragging) {
            this.idleTimer += dt;
            if (this.idleTimer > 2.5) {
              this.baseRotationY += (0 - this.baseRotationY) * 0.03;
            }
          }

          // Dynamic tilt angles
          const mouseTiltY = this.mouse.x * 0.45;
          const mouseTiltX = -this.mouse.y * 0.28;
          const gentleSway = (!this.isDragging) ? Math.sin(now * 0.0012) * 0.06 : 0;

          list.forEach((child, s) => {
            const isActive = (s === this.currentIndex);
            child.visible = isActive;

            // Anchor the parent group firmly at the right-side stage position
            child.position.set(targetX, targetY, 0);

            const watchMesh = child.children[0];
            if (watchMesh) {
              // Center mesh at local origin (0,0,0) so parent rotation spins strictly in-place
              watchMesh.position.set(0, 0, 0);
              watchMesh.scale.setScalar(targetScale);

              if (isActive) {
                // In-place rotation around its own center (no orbit)
                child.rotation.y = this.baseRotationY;

                // Explicit tilt tracking cursor
                watchMesh.rotation.y = mouseTiltY + gentleSway;
                watchMesh.rotation.x = Math.max(-0.35, Math.min(0.35, mouseTiltX));
              }
            }
          });
        }
      }

      this.animId = requestAnimationFrame(loop);
    };

    this.animId = requestAnimationFrame(loop);
  }

  stopLoop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  start() {}
  stop() {}
}

window.Hero3DWatch = new HeroWatchBridge();
