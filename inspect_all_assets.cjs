const fs = require('fs');

const js = fs.readFileSync('public/assets/original_index.js', 'utf8');
const css = fs.readFileSync('public/assets/60fps_original.css', 'utf8');

console.log('--- CSS Fonts & Assets ---');
const fontMatches = [...css.matchAll(/url\(([^)]+)\)/g)].map(m => m[1].replace(/['"]/g, ''));
console.log('Font & CSS URLs:', [...new Set(fontMatches)]);

console.log('--- JS Assets & Strings ---');
const assetMatches = [...js.matchAll(/["'](\/assets\/[^"']+|\/sounds\/[^"']+|[^"']+\.(?:glb|gltf|exr|hdr|png|jpg|webp|svg|mp3|wav|ogg|json|woff2|woff|ttf))["']/gi)].map(m => m[1]);
console.log('JS Assets:', [...new Set(assetMatches)]);
