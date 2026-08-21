const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/60fps_bundle.js', 'utf8');

// Find strings passed to .load( or FileLoader
const loadCalls = content.match(/\.load\s*\(\s*["'`][^"'`]+["'`]/g);
console.log('Load calls:', loadCalls);

// Find any paths starting with / or ./ or http
const pathMatches = content.match(/["'`](\/[a-zA-Z0-9_\-\.\/]+|\.\/[a-zA-Z0-9_\-\.\/]+)["'`]/g);
console.log('Paths:', pathMatches ? [...new Set(pathMatches)].filter(p => !p.includes('node_modules')) : []);
