const fs = require('fs');

const js = fs.readFileSync('public/assets/original_index.js', 'utf8');

// Find sections, labels, texts, routes, translations
const textStrings = [];
// Find any JSON embedded or route definitions
const jsonMatches = [...js.matchAll(/\{[^{}]*"title"[^{}]*\}/g)].map(m => m[0]);
console.log('JSON matches with title:', jsonMatches.slice(0, 10));

// Find camera positions or scroll scenes
const posMatches = [...js.matchAll(/position:\s*\[([-\d.,\s]+)\]/g)].map(m => m[1]);
console.log('Positions found:', posMatches.slice(0, 15));

// Find text content like headers, descriptions, specs
const engTexts = [...js.matchAll(/"([A-Z0-9\s.,'\/\\-]{4,100})"/g)].map(m => m[1]);
console.log('Sample texts:', Array.from(new Set(engTexts)).filter(t => t.length > 10 && !t.includes('http')).slice(0, 30));
