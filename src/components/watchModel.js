import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class WatchModel {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'WatchModelRoot';

    this.isLoaded = false;
    this.modelRoot = null;
    this.explodedProgress = 0;

    // Shared high-quality PBR materials with ultra-high specular reflection
    this.sharedMaterials = {
      stainlessSteelBrushed: new THREE.MeshStandardMaterial({
        color: 0xf5f7fa,
        metalness: 0.98,
        roughness: 0.08,
        envMapIntensity: 4.2,
        name: 'shared_steel_brushed'
      }),
      stainlessSteelPolished: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 1.0,
        roughness: 0.02,
        envMapIntensity: 5.0,
        name: 'shared_steel_polished'
      }),
      goldTourbillon: new THREE.MeshStandardMaterial({
        color: 0xffc845,
        metalness: 0.98,
        roughness: 0.06,
        envMapIntensity: 4.2,
        name: 'shared_gold'
      }),
      rubyJewel: new THREE.MeshPhysicalMaterial({
        color: 0xef0033,
        transmission: 0.85,
        transparent: true,
        opacity: 0.95,
        roughness: 0.02,
        ior: 1.76,
        name: 'shared_ruby'
      }),
      sapphireGlass: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.96,
        transparent: true,
        opacity: 0.35,
        roughness: 0.01,
        ior: 1.77,
        envMapIntensity: 3.5,
        reflectivity: 0.9,
        depthWrite: false,
        name: 'shared_glass'
      }),
      blackDialBase: new THREE.MeshStandardMaterial({
        color: 0x0c0e12,
        metalness: 0.92,
        roughness: 0.12,
        envMapIntensity: 3.0,
        name: 'shared_black_dial'
      })
    };

    // Cache mesh references for animations & exploded view
    this.parts = {
      crystalFront: [],
      crystalBack: [],
      screws: [],
      dialParts: [],
      handHours: [],
      handMinutes: [],
      handSeconds: [],
      tourbillon: [],
      mainplate: [],
      backplate: [],
      barrel: [],
      rotorWeight: [],
      bracelet: [],
      allMeshes: []
    };

    this.initialPositions = new Map();
    this.loadGLBModel();
  }

  loadGLBModel() {
    const loader = new GLTFLoader();

    loader.load('/assets/watch-DXFPNOEl.glb', (gltf) => {
      this.modelRoot = gltf.scene;
      this.modelRoot.name = '60fps_Watch_Scene';

      // Hide only isolated spare links outside the watch
      const nodesToHide = [
        'single-link',
        'single-central-link',
        'dial-background-gray',
        'glowdial',
        'hand-hours-shadow',
        'hand-hours-shadow.001',
        'hand-minutes-shadow'
      ];

      this.modelRoot.traverse((child) => {
        const name = child.name;

        if (nodesToHide.includes(name) || (name.startsWith('single-') && !name.includes('metal'))) {
          child.visible = false;
          return;
        }

        // Make sure all core watch nodes are visible
        child.visible = true;

        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          this.parts.allMeshes.push(child);

          const matName = child.material ? child.material.name : '';

          // 1. Crystal Glass Front & Back
          if (matName.includes('glass') || name.includes('crystal')) {
            child.material = this.sharedMaterials.sapphireGlass;
          }
          // 2. Bracelet, Lugs, Bezel, Case (Brushed Stainless Steel)
          else if (
            name.includes('bracelet') ||
            name.includes('dial-toBracelet') ||
            name.includes('dial-front') ||
            name.includes('xplodedSide') ||
            matName.includes('metal-brushed')
          ) {
            child.material = this.sharedMaterials.stainlessSteelBrushed.clone();
            this.parts.bracelet.push(child);
          }
          // 3. Polished Steel (Screws, Clasp, Bezel Outer Rim, Hands)
          else if (
            name.startsWith('screw') ||
            name.includes('clasp') ||
            name.includes('dial-outline') ||
            matName.includes('metal-glossy')
          ) {
            child.material = this.sharedMaterials.stainlessSteelPolished.clone();
          }
          // 4. Black Dial Background
          else if (name === 'dial-background' || matName === 'dial') {
            child.material = this.sharedMaterials.blackDialBase.clone();
          }
          // 5. Ruby Jewels
          else if (name.includes('ruby') || matName.includes('ruby')) {
            child.material = this.sharedMaterials.rubyJewel;
          }
          // 6. Tourbillon & Gold Components
          else if (name.includes('tourbillon') || name.includes('barrel') || name.includes('Gear')) {
            child.material = this.sharedMaterials.goldTourbillon.clone();
          }
          // 7. Text, Moonphase, Numerals
          else if (child.material) {
            child.material.envMapIntensity = 2.0;
            child.material.needsUpdate = true;
          }
        }

        // Store initial position
        this.initialPositions.set(child, child.position.clone());

        const lowerName = name.toLowerCase();
        if (lowerName.includes('crystal-front')) {
          this.parts.crystalFront.push(child);
        } else if (lowerName.includes('crystal-back')) {
          this.parts.crystalBack.push(child);
        } else if (lowerName.startsWith('screw')) {
          this.parts.screws.push(child);
        } else if (lowerName.includes('hand-hours')) {
          this.parts.handHours.push(child);
        } else if (lowerName.includes('hand-minutes')) {
          this.parts.handMinutes.push(child);
        } else if (lowerName.includes('seconds')) {
          this.parts.handSeconds.push(child);
        } else if (lowerName.includes('tourbillon')) {
          this.parts.tourbillon.push(child);
        } else if (lowerName.includes('mainplate')) {
          this.parts.mainplate.push(child);
        } else if (lowerName.includes('backplate')) {
          this.parts.backplate.push(child);
        } else if (lowerName.includes('barrel')) {
          this.parts.barrel.push(child);
        } else if (lowerName.includes('weight')) {
          this.parts.rotorWeight.push(child);
        } else if (lowerName.includes('dial') || lowerName.includes('moon') || lowerName.includes('number')) {
          this.parts.dialParts.push(child);
        }
      });

      // Center and scale watch
      const box = new THREE.Box3().setFromObject(this.modelRoot);
      const center = box.getCenter(new THREE.Vector3());

      this.modelRoot.position.x = -center.x;
      this.modelRoot.position.y = -center.y + 0.002;
      this.modelRoot.position.z = -center.z;

      const scaleFactor = 48.0;
      const wrapperGroup = new THREE.Group();
      wrapperGroup.name = 'Watch_Centered_Wrapper';
      wrapperGroup.add(this.modelRoot);
      wrapperGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);

      this.group.add(wrapperGroup);
      this.isLoaded = true;
    }, undefined, (err) => {
      console.error('Error loading watch GLB:', err);
    });
  }

  setExplodedProgress(progress) {
    if (!this.isLoaded) return;
    this.explodedProgress = THREE.MathUtils.clamp(progress, 0, 1);
    const p = this.explodedProgress;
    const easeP = Math.sin((p * Math.PI) / 2);

    const applyOffset = (partList, zOffsetMeters, xOffset = 0, yOffset = 0) => {
      partList.forEach((node) => {
        const initPos = this.initialPositions.get(node);
        if (initPos) {
          node.position.z = initPos.z + zOffsetMeters * easeP;
          node.position.x = initPos.x + xOffset * easeP;
          node.position.y = initPos.y + yOffset * easeP;
        }
      });
    };

    applyOffset(this.parts.crystalFront, 0.055);
    applyOffset(this.parts.screws, 0.045);
    applyOffset(this.parts.handSeconds, 0.038);
    applyOffset(this.parts.handMinutes, 0.032);
    applyOffset(this.parts.handHours, 0.026);
    applyOffset(this.parts.dialParts, 0.02);
    applyOffset(this.parts.tourbillon, 0.008);
    applyOffset(this.parts.mainplate, -0.008);
    applyOffset(this.parts.barrel, -0.016);
    applyOffset(this.parts.backplate, -0.026);
    applyOffset(this.parts.rotorWeight, -0.038);
    applyOffset(this.parts.crystalBack, -0.048);
  }

  updateCaseMaterial(materialKey) {
    if (!this.isLoaded) return;

    const colors = {
      silver: { color: 0xffffff, metalness: 0.99, roughness: 0.03, envMapIntensity: 4.8 },
      steel: { color: 0xffffff, metalness: 0.99, roughness: 0.03, envMapIntensity: 4.8 },
      gold: { color: 0xffce48, metalness: 0.98, roughness: 0.05, envMapIntensity: 4.4 },
      yellowgold: { color: 0xffce48, metalness: 0.98, roughness: 0.05, envMapIntensity: 4.4 },
      rosegold: { color: 0xf5b29c, metalness: 0.98, roughness: 0.05, envMapIntensity: 4.4 },
      rose: { color: 0xf5b29c, metalness: 0.98, roughness: 0.05, envMapIntensity: 4.4 },
      obsidian: { color: 0x363942, metalness: 0.98, roughness: 0.04, envMapIntensity: 4.5 },
      midnight: { color: 0x363942, metalness: 0.98, roughness: 0.04, envMapIntensity: 4.5 },
      stealth: { color: 0x444854, metalness: 0.98, roughness: 0.05, envMapIntensity: 4.2 }
    };

    const conf = colors[materialKey] || colors.silver;

    this.parts.allMeshes.forEach((mesh) => {
      if (
        mesh.material &&
        mesh.material.name &&
        (mesh.material.name.includes('steel') ||
          mesh.material.name.includes('metal') ||
          mesh.name.includes('bracelet') ||
          mesh.name.includes('dial-toBracelet') ||
          mesh.name.includes('dial-front') ||
          mesh.name.includes('xplodedSide') ||
          mesh.name.includes('clasp'))
      ) {
        mesh.material.color.setHex(conf.color);
        mesh.material.metalness = conf.metalness;
        mesh.material.roughness = conf.roughness;
        mesh.material.envMapIntensity = conf.envMapIntensity || 3.0;
        mesh.material.needsUpdate = true;
      }
    });

    const hudColor = document.getElementById('hud-color-text');
    if (hudColor) {
      hudColor.textContent = 
        (materialKey === 'silver' || materialKey === 'steel') ? 'Pure Steel' :
        (materialKey === 'gold' || materialKey === 'yellowgold') ? '18K Yellow Gold' :
        (materialKey === 'rosegold' || materialKey === 'rose') ? '18K Rose Gold' :
        (materialKey === 'obsidian' || materialKey === 'midnight') ? 'Midnight DLC' :
        materialKey === 'stealth' ? 'Gunmetal Steel' : 'Pure Steel';
    }
  }

  updateDialColor(dialKey) {
    if (!this.isLoaded) return;
    const tints = {
      classic: 0x0a0b0e,
      midnight: 0x0a192f,
      emerald: 0x072418,
      skeleton: 0x22242a
    };

    const tint = tints[dialKey] || 0x0a0b0e;
    this.parts.dialParts.forEach((mesh) => {
      if (mesh.name === 'dial-background' && mesh.material) {
        mesh.material.color.setHex(tint);
      }
    });
  }

  updateStrapMaterial(strapKey) {
    this.updateCaseMaterial('silver');
  }

  update(delta, time) {
    if (!this.isLoaded) return;

    // 1. Sweeping hands
    this.parts.handSeconds.forEach((hand) => {
      hand.rotation.z = -time * (Math.PI / 30);
    });
    this.parts.handMinutes.forEach((hand) => {
      hand.rotation.z = -(time / 60) * (Math.PI / 30);
    });
    this.parts.handHours.forEach((hand) => {
      hand.rotation.z = -(time / 3600) * (Math.PI / 6);
    });

    // 2. Active Tourbillon & Balance Wheel
    this.parts.tourbillon.forEach((part) => {
      if (part.name.includes('tourbillon-xploded-1') || part.name.includes('tourbillon-xploded-2')) {
        part.rotation.z += delta * 2.5;
      } else {
        part.rotation.z = Math.sin(time * 25) * 0.35;
      }
    });

    // 3. Rotor Swing
    this.parts.rotorWeight.forEach((rotor) => {
      rotor.rotation.z = Math.sin(time * 0.8) * 0.8 + Math.sin(time * 1.6) * 0.4;
    });
  }
}
