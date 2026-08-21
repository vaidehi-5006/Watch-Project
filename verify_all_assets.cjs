const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = 'public/assets';
const files = fs.readdirSync(targetDir);

const foundUrls = new Set();

for (const file of files) {
  if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json')) {
    const content = fs.readFileSync(path.join(targetDir, file), 'utf8');
    const matches = [...content.matchAll(/["'](\/assets\/[^"'\s]+|\/images\/[^"'\s]+|[^"'\s]+\.(?:png|jpg|jpeg|webp|svg|exr|glb|json|woff2|woff|ttf))["']/gi)].map(m => m[1]);
    for (const m of matches) {
      if (!m.startsWith('http') && !m.startsWith('data:') && !m.includes('${')) {
        let clean = m.startsWith('/') ? m.slice(1) : m.startsWith('./') ? `assets/${m.slice(2)}` : m;
        if (!clean.startsWith('assets/') && (clean.endsWith('.glb') || clean.endsWith('.exr') || clean.endsWith('.png') || clean.endsWith('.jpg') || clean.endsWith('.webp') || clean.endsWith('.json') || clean.endsWith('.svg'))) {
          clean = `assets/${clean}`;
        }
        foundUrls.add(clean);
      }
    }
  }
}

console.log('Total found assets to verify:', foundUrls.size);
console.log('List of assets:', [...foundUrls]);

async function verifyAndDownload() {
  for (const asset of foundUrls) {
    const dest = path.join('public', asset);
    if (!fs.existsSync(dest)) {
      console.log('Downloading missing asset:', asset);
      const url = `https://thewatch.60fps.fr/${asset}`;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await new Promise((resolve) => {
        https.get(url, (res) => {
          if (res.statusCode === 200) {
            const stream = fs.createWriteStream(dest);
            res.pipe(stream);
            stream.on('finish', () => {
              console.log('Downloaded:', asset);
              resolve();
            });
          } else {
            console.log('Status', res.statusCode, asset);
            resolve();
          }
        }).on('error', (e) => {
          console.log('Error', asset, e.message);
          resolve();
        });
      });
    }
  }
  console.log('All missing assets checked!');
}

verifyAndDownload();
