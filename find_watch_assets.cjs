const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/the_watch_subbundle.js', 'utf8');

const assetMatches = content.match(/["'`][^"'`]*\.(?:glb|gltf|bin|png|webp|jpg|jpeg|svg|mp3|wav|hdr)["'`]/gi);
console.log('Asset matches in the-watch bundle:', assetMatches ? [...new Set(assetMatches)] : []);

// Find all URLs or file paths in the-watch bundle
const paths = content.match(/\/assets\/[^"'`\s]+/gi);
console.log('Asset paths in the-watch bundle:', paths ? [...new Set(paths)] : []);
