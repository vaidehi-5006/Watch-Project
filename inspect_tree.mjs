import fs from 'fs';

const buffer = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/assets/watch-DXFPNOEl.glb');
const jsonLength = buffer.readUInt32LE(12);
const jsonBuffer = buffer.slice(20, 20 + jsonLength);
const gltf = JSON.parse(jsonBuffer.toString('utf8'));

console.log('Scene 0 nodes:', gltf.scenes[0].nodes);
gltf.scenes[0].nodes.forEach(nodeIdx => {
  const node = gltf.nodes[nodeIdx];
  console.log(`Scene root node [${nodeIdx}] "${node.name}" children:`, node.children);
});

// Check node 125 (theWatch) children
const theWatch = gltf.nodes[125];
if (theWatch) {
  console.log('\nNode 125 "theWatch" children:', theWatch.children);
  if (theWatch.children) {
    theWatch.children.forEach(cIdx => {
      console.log(`  child [${cIdx}] "${gltf.nodes[cIdx]?.name}"`);
    });
  }
}

// Check node 124 (xploded) children
const xploded = gltf.nodes[124];
if (xploded) {
  console.log('\nNode 124 "xploded" children:', xploded.children);
  if (xploded.children) {
    xploded.children.forEach(cIdx => {
      console.log(`  child [${cIdx}] "${gltf.nodes[cIdx]?.name}"`);
    });
  }
}
