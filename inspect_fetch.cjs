const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/Vaidehi/Project/public/60fps_bundle.js', 'utf8');

const idx = content.indexOf('fetch(this.url)');
if (idx !== -1) {
  console.log('Surrounding fetch(this.url):', content.slice(Math.max(0, idx - 400), idx + 400));
}

const idx2 = content.indexOf('fetch(o)');
if (idx2 !== -1) {
  console.log('Surrounding fetch(o):', content.slice(Math.max(0, idx2 - 400), idx2 + 400));
}
