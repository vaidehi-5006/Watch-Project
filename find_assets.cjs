const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/60fps_bundle.js', 'utf8');

const urlRegex = /["']([^"']*\.(?:png|webp|jpg|jpeg|svg|hdr|glb|gltf|bin|json|webp|avif))["']/gi;
const matches = [];
let match;
while ((match = urlRegex.exec(content)) !== null) {
  matches.push(match[1]);
}

console.log('Unique assets:', [...new Set(matches)]);

// Find all URLs or file paths
const anyPath = content.match(/\/assets\/[^"'\s]+/gi);
console.log('Assets found:', anyPath ? [...new Set(anyPath)] : []);

// Find strings related to watch or parts
const strings = content.match(/watch|model|color|silver|gold|black|case|dial|strap|rotor|bezel/gi);
console.log('Keywords found:', strings ? strings.length : 0);
