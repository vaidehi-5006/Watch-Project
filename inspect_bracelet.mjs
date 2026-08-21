import fs from 'fs';

const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

// Check Node 1 (bracelet.120) and its mesh
const node1 = gltf.nodes[1];
console.log('Node 1:', node1);

const meshIndex = node1.mesh;
const mesh = gltf.meshes[meshIndex];
console.log('Mesh:', mesh);

const prim = mesh.primitives[0];
console.log('Primitive attributes:', prim.attributes);
console.log('Primitive material index:', prim.material);

const mat = gltf.materials[prim.material];
console.log('Material:', mat);

// Check if there are other bracelet nodes
console.log('\nAll nodes containing "bracelet" or "strap" or "link":');
gltf.nodes.forEach((n, idx) => {
  if (n.name.toLowerCase().includes('bracelet') || n.name.toLowerCase().includes('strap') || n.name.toLowerCase().includes('link') || n.name.toLowerCase().includes('clasp')) {
    console.log(`[${idx}] "${n.name}" -> mesh ${n.mesh}`);
  }
});
