const fs = require('fs');

const js = fs.readFileSync('public/assets/original_index.js', 'utf8');

// Find all dynamic imports or asset references
const imports = [...js.matchAll(/import\s*\(["']([^"']+)["']\)/g)].map(m => m[1]);
const fromImports = [...js.matchAll(/from\s*["']([^"']+)["']/g)].map(m => m[1]);
const assetUrls = [...js.matchAll(/["'](\/assets\/[^"']+)["']/g)].map(m => m[1]);

console.log('Dynamic imports:', [...new Set(imports)]);
console.log('From imports:', [...new Set(fromImports)]);
console.log('Asset URLs:', [...new Set(assetUrls)]);
