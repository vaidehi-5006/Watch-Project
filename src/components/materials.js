import * as THREE from 'three';

export class WatchMaterials {
  constructor() {
    const textureLoader = new THREE.TextureLoader();

    // High-resolution Dial & Caseback textures from reference assets
    this.dialTexture = textureLoader.load('/textures/fs60p_dial.png');
    this.dialTexture.colorSpace = THREE.SRGBColorSpace;

    this.casebackTexture = textureLoader.load('/textures/fs60p_caseback.png');
    this.casebackTexture.colorSpace = THREE.SRGBColorSpace;

    // Standard PBR Material Presets matching the FS 60P stainless steel horology
    this.materials = {
      // 316L Stainless Steel (High-gloss specular with brushed satin reflection)
      stainlessSteel: new THREE.MeshStandardMaterial({
        color: 0xe8edf2,
        metalness: 0.96,
        roughness: 0.18,
        name: 'stainlessSteel'
      }),

      // Polished Mirror Steel (for chamfers, crown, hands & bezel screws)
      polishedSteel: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.98,
        roughness: 0.06,
        name: 'polishedSteel'
      }),

      // Rose Gold Variant
      roseGold: new THREE.MeshStandardMaterial({
        color: 0xe7ab95,
        metalness: 0.95,
        roughness: 0.18,
        name: 'roseGold'
      }),

      // Obsidian DLC Variant
      obsidianDLC: new THREE.MeshStandardMaterial({
        color: 0x18191d,
        metalness: 0.9,
        roughness: 0.26,
        name: 'obsidianDLC'
      }),

      // Gunmetal Variant
      gunmetal: new THREE.MeshStandardMaterial({
        color: 0x3d434e,
        metalness: 0.93,
        roughness: 0.22,
        name: 'gunmetal'
      }),

      // Sapphire Crystal Dome (High transmission physical refraction)
      sapphireGlass: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.98,
        opacity: 1,
        transparent: true,
        roughness: 0.015,
        ior: 1.77,
        thickness: 1.2,
        specularIntensity: 1.0,
        specularColor: 0xffffff,
        clearcoat: 1.0,
        clearcoatRoughness: 0.01,
        name: 'sapphireGlass'
      }),

      // Dial Face using the exact high-res FS 60P fluted dial texture
      dialFace: new THREE.MeshStandardMaterial({
        map: this.dialTexture,
        metalness: 0.85,
        roughness: 0.28,
        name: 'dialFace'
      }),

      // Engraved Caseback
      casebackEngraved: new THREE.MeshStandardMaterial({
        map: this.casebackTexture,
        metalness: 0.94,
        roughness: 0.22,
        name: 'casebackEngraved'
      }),

      // Hands (Faceted Rhodium with Super-LumiNova)
      handsSteel: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.98,
        roughness: 0.05,
        name: 'handsSteel'
      }),

      handsLume: new THREE.MeshStandardMaterial({
        color: 0xd6f7e8,
        emissive: 0x228b22,
        emissiveIntensity: 0.15,
        roughness: 0.3,
        name: 'handsLume'
      }),

      // Open-Heart Tourbillon Escapement Gold Wheel
      tourbillonGold: new THREE.MeshStandardMaterial({
        color: 0xebb438,
        metalness: 0.96,
        roughness: 0.2,
        name: 'tourbillonGold'
      }),

      gearsSteel: new THREE.MeshStandardMaterial({
        color: 0xd2d7e0,
        metalness: 0.96,
        roughness: 0.15,
        name: 'gearsSteel'
      }),

      // Synthetic Corundum Ruby Jewel Pivot
      rubyJewel: new THREE.MeshPhysicalMaterial({
        color: 0xd90429,
        transmission: 0.75,
        transparent: true,
        opacity: 0.92,
        roughness: 0.08,
        ior: 1.76,
        thickness: 0.8,
        name: 'rubyJewel'
      }),

      // Blued Steel Micro-Screws
      bluedScrew: new THREE.MeshStandardMaterial({
        color: 0x1c50a6,
        metalness: 0.95,
        roughness: 0.12,
        name: 'bluedScrew'
      }),

      // Black Enamel Inset (Crown logo & accents)
      blackEnamel: new THREE.MeshStandardMaterial({
        color: 0x0a0a0c,
        metalness: 0.2,
        roughness: 0.15,
        name: 'blackEnamel'
      }),

      // Movement Bridge Baseplate
      movementBridge: new THREE.MeshStandardMaterial({
        color: 0xdde2eb,
        metalness: 0.94,
        roughness: 0.24,
        name: 'movementBridge'
      }),

      // Rotor
      rotorTungsten: new THREE.MeshStandardMaterial({
        color: 0x9ca3af,
        metalness: 0.95,
        roughness: 0.2,
        name: 'rotorTungsten'
      }),

      rotorGoldTrim: new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.98,
        roughness: 0.15,
        name: 'rotorGoldTrim'
      }),

      // Straps
      blackLeather: new THREE.MeshStandardMaterial({
        color: 0x141416,
        roughness: 0.75,
        metalness: 0.05,
        name: 'blackLeather'
      }),

      brownLeather: new THREE.MeshStandardMaterial({
        color: 0x5c3317,
        roughness: 0.7,
        metalness: 0.05,
        name: 'brownLeather'
      }),

      milaneseMesh: new THREE.MeshStandardMaterial({
        color: 0xbfc4cc,
        roughness: 0.35,
        metalness: 0.95,
        name: 'milaneseMesh'
      }),

      rubberSport: new THREE.MeshStandardMaterial({
        color: 0x212226,
        roughness: 0.9,
        metalness: 0.02,
        name: 'rubberSport'
      })
    };
  }

  getMaterial(name) {
    return this.materials[name] || this.materials.stainlessSteel;
  }
}
