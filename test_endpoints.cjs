const http = require('http');

const endpoints = [
  '/',
  '/assets/index-Ck-pEZ8v.js',
  '/assets/index-DSKOTUpi.css',
  '/assets/watch-DXFPNOEl.glb',
  '/assets/envmap-kW4EmG7W.exr',
  '/assets/metal-B47qzO42.exr',
  '/assets/noise-solid-Lw93M9Kl.png',
  '/assets/the-watch.D6O26wKS.js',
  '/assets/fonts/Nekst/Nekst-Bold.woff2',
  '/assets/fonts/Inter/Inter-Regular.woff2',
  '/favicon.png',
  '/share-image.webp'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3001${path}`, (res) => {
      console.log(`[${res.statusCode}] ${path} (${res.headers['content-type']})`);
      resolve();
    }).on('error', (err) => {
      console.error(`[ERROR] ${path}: ${err.message}`);
      resolve();
    });
  });
}

(async () => {
  for (const ep of endpoints) {
    await checkUrl(ep);
  }
  console.log('All local endpoints verified!');
})();
