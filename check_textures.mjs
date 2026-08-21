import fs from 'fs';
import * as THREE from 'three';

const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Extensions used:', gltf.extensionsUsed);
console.log('Extensions required:', gltf.extensionsRequired);

// Check textures in GLTF
console.log('\nTextures count:', gltf.textures ? gltf.textures.length : 0);
if (gltf.textures) {
  gltf.textures.forEach((t, idx) => {
    const img = gltf.images[t.source];
    console.log(`Texture [${idx}] source: [${t.source}] name: "${img.name || ''}" mimeType: "${img.mimeType || ''}"`);
  });
}
