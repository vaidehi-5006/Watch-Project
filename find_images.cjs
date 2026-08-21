const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/60fps_bundle.js', 'utf8');

// Look for image loading loops or frame loaders
const imgSearch = content.match(/new Image\(\)|fetch\(|\.src\s*=|createImageBitmap|drawImage/g);
console.log('Image methods:', imgSearch);

// Look for where URLs are generated or fetched
const urlGens = content.match(/https?:\/\/[^"'`\s]+/g);
console.log('URLs:', urlGens);

// Look for template literals like `...${...}...`
const templates = content.match(/`[^`]{5,80}`/g);
console.log('Sample templates:', templates ? templates.slice(0, 30) : []);
