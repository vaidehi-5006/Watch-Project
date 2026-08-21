import fs from 'fs';

const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Nodes & Mesh & Material associations:');
gltf.nodes.forEach((n, idx) => {
  if (n.mesh !== undefined) {
    const mesh = gltf.meshes[n.mesh];
    const matIdx = mesh.primitives[0]?.material;
    const mat = matIdx !== undefined ? gltf.materials[matIdx] : null;
    console.log(`Node [${idx}] "${n.name}" -> Mesh "${mesh.name}" -> Material [${matIdx}] "${mat ? mat.name : 'none'}"`);
  }
});
