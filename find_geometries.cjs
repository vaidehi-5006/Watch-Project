const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/60fps_bundle.js', 'utf8');

// Find occurrences of BufferGeometry, CylinderGeometry, GLTFLoader, etc.
const geoMatches = content.match(/GLTFLoader|OBJLoader|DRACOLoader|BufferGeometry|ExtrudeGeometry|ShapeGeometry|CylinderGeometry|BoxGeometry/g);
console.log('Geometry loaders:', geoMatches);

// Find occurrences of fetch or binary data
const fetchMatches = content.match(/fetch\([^)]+\)/g);
console.log('Fetch calls:', fetchMatches);

// Find where meshes are created or added to scene
const meshMatches = content.match(/new THREE\.Mesh|new Mesh\(|\.load\(/g);
console.log('Mesh / Load count:', meshMatches ? meshMatches.length : 0);
