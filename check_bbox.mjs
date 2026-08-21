import fs from 'fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Read GLB and compute bounding box
const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');

// Let's write a browser-like script or inspect the coordinates
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

// Check accessor min/max
let minX = Infinity, minY = Infinity, minZ = Infinity;
let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

gltf.accessors.forEach(acc => {
  if (acc.min && acc.max && acc.type === 'VEC3') {
    minX = Math.min(minX, acc.min[0]);
    minY = Math.min(minY, acc.min[1]);
    minZ = Math.min(minZ, acc.min[2]);
    maxX = Math.max(maxX, acc.max[0]);
    maxY = Math.max(maxY, acc.max[1]);
    maxZ = Math.max(maxZ, acc.max[2]);
  }
});

console.log('Overall Bounding Box in GLB:');
console.log('Min:', minX, minY, minZ);
console.log('Max:', maxX, maxY, maxZ);
console.log('Dimensions (Width, Height, Depth):', maxX - minX, maxY - minY, maxZ - minZ);
