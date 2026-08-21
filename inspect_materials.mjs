import fs from 'fs';

const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Materials list:');
gltf.materials.forEach((m, idx) => {
  console.log(`[${idx}] "${m.name}": pbr=`, m.pbrMetallicRoughness);
});

console.log('\nMeshes to hide / special meshes:');
gltf.nodes.forEach((n, idx) => {
  if (n.name.includes('single') || n.name.includes('shadow') || n.name.includes('empty')) {
    console.log(`Node [${idx}] "${n.name}"`);
  }
});
