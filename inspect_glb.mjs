import fs from 'fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// We can read the GLB JSON chunk
const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');

// GLB header: magic (4), version (4), length (4), chunkLength (4), chunkType (4)
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Nodes in 3D Model:');
gltf.nodes.forEach((n, idx) => {
  console.log(`[${idx}] name: "${n.name}", mesh: ${n.mesh !== undefined ? gltf.meshes[n.mesh]?.name || n.mesh : 'none'}`);
});

console.log('\nMeshes count:', gltf.meshes.length);
console.log('Materials in 3D Model:');
gltf.materials.forEach((m, idx) => {
  console.log(`[${idx}] name: "${m.name}"`);
});

console.log('\nAnimations in 3D Model:');
if (gltf.animations) {
  gltf.animations.forEach((a, idx) => {
    console.log(`[${idx}] name: "${a.name}"`);
  });
} else {
  console.log('None');
}
