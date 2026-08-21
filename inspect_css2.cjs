const fs = require('fs');
const css = fs.readFileSync('public/assets/index-DSKOTUpi.css', 'utf8');

// Find all css rules that contain 'vw' - these control big element sizing
const vwMatches = [...css.matchAll(/[^}]{0,40}:\s*\d+vw[^}]{0,100}/g)].map(m => m[0].trim());
console.log('VW-sized rules (first 20):');
vwMatches.slice(0, 20).forEach(r => console.log(' -', r));

// Find fps- specific classes
const fpsClasses = [...css.matchAll(/\.(fps-[a-z-]+)\{([^}]+)/g)].map(m => '.' + m[1] + '{' + m[2].slice(0, 80));
console.log('\nfps- classes (first 20):');
fpsClasses.slice(0, 20).forEach(r => console.log(' -', r));

// Find the-watch specific section
const twIdx = css.indexOf('#the-watch');
if (twIdx !== -1) console.log('\n#the-watch CSS:', css.slice(twIdx, twIdx + 400));
