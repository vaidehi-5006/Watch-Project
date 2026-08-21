const fs = require('fs');
const https = require('https');
const path = require('path');

const rootAssets = [
  'favicon.png',
  'share-image.webp',
  'assets/envmap-kW4EmG7W.exr',
  'assets/metal-B47qzO42.exr',
  'assets/noise-solid-Lw93M9Kl.png',
  'assets/watch-DXFPNOEl.glb'
];

async function downloadRoot(file) {
  const url = `https://thewatch.60fps.fr/${file}`;
  const dest = path.join('public', file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          console.log('Downloaded root asset:', file);
          resolve();
        });
      } else {
        console.log('Status', res.statusCode, file);
        resolve();
      }
    }).on('error', (e) => {
      console.log('Error', file, e.message);
      resolve();
    });
  });
}

(async () => {
  for (const f of rootAssets) {
    await downloadRoot(f);
  }
  console.log('Root assets download check done!');
})();
