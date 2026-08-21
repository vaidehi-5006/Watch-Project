const fs = require('fs');

const js = fs.readFileSync('public/assets/original_index.js', 'utf8');

// Find all JSON-like objects in the bundle
const matches = js.match(/\{"common":\{.*?\}\}\}/gs);
if (matches) {
  matches.forEach((m, i) => {
    fs.writeFileSync(`public/assets/locale_${i}.json`, m);
    console.log(`Locale ${i} extracted!`);
  });
} else {
  // Try finding strings with "FS 60P" or "timeless"
  const startIdx = js.indexOf('FS 60P');
  if (startIdx !== -1) {
    console.log('Snippet around FS 60P:', js.slice(startIdx - 200, startIdx + 800));
  }
}
