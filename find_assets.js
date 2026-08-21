const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/60fps_bundle.js', 'utf8');

// Find urls, textures, loaders, images
const urlRegex = /["']([^"']*\.(?:png|webp|jpg|jpeg|svg|hdr|glb|gltf|bin|json))["']/gi;
const matches = [];
let match;
while ((match = urlRegex.exec(content)) !== null) {
  matches.push(match[1]);
}

console.log('Unique assets:', [...new Set(matches)]);

// Check if there are canvas rendering sequences or three.js meshes
console.log('Includes Three:', content.includes('WebGLRenderer') || content.includes('three'));
console.log('Includes Canvas 2D:', content.includes('getContext("2d")') || content.includes("getContext('2d')"));

// Look for image sequences or sprite frames
const sequenceMatches = content.match(/frame[s]?|image[s]?|sequence|render/gi);
console.log('Sequence matches count:', sequenceMatches ? sequenceMatches.length : 0);
