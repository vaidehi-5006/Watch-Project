const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = 'public/assets';
fs.mkdirSync(targetDir, { recursive: true });

const downloaded = new Set();
const queue = [
  'index-Ck-pEZ8v.js',
  'index-DSKOTUpi.css',
  'en_GB.CxTS4l6h.js',
  'fr_FR.BkRH7uLw.js',
  'en_GB.CAgLt01W.js',
  'fr_FR.DKItQTa6.js',
  'sample-project.COb35JvF.js',
  'the-watch.D6O26wKS.js',
  'index.BXJSulOs.js',
  'page1.BU5gSym-.js',
  'page2.DTew6172.js'
];

async function downloadFile(name) {
  if (downloaded.has(name)) return;
  downloaded.add(name);

  const url = `https://thewatch.60fps.fr/assets/${name}`;
  const dest = path.join(targetDir, name);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          console.log('Successfully downloaded:', name);
          // Check if it has more imports
          if (name.endsWith('.js')) {
            const content = fs.readFileSync(dest, 'utf8');
            const imports = [...content.matchAll(/import\s*\(["']\.\/([^"']+)["']\)/g)].map(m => m[1]);
            const fromImports = [...content.matchAll(/from\s*["']\.\/([^"']+)["']/g)].map(m => m[1]);
            const mapDeps = [...content.matchAll(/["']([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.js)["']/g)].map(m => m[1]);
            const extraAssets = [...content.matchAll(/["'](\/assets\/[^"']+)["']/g)].map(m => m[1].replace('/assets/', ''));

            for (const item of [...imports, ...fromImports, ...mapDeps, ...extraAssets]) {
              if (!downloaded.has(item)) {
                queue.push(item);
              }
            }
          }
          resolve();
        });
      } else {
        console.log('Not found / Error:', name, res.statusCode);
        resolve();
      }
    }).on('error', (e) => {
      console.log('Error downloading', name, e.message);
      resolve();
    });
  });
}

(async () => {
  while (queue.length > 0) {
    const current = queue.shift();
    await downloadFile(current);
  }
  console.log('All 60fps assets and chunks downloaded recursively!');
})();
