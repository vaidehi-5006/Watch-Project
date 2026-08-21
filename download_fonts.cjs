const fs = require('fs');
const https = require('https');
const path = require('path');

const fonts = [
  'fonts/Nekst/Nekst-Thin.woff2',
  'fonts/Nekst/Nekst-Light.woff2',
  'fonts/Nekst/Nekst-Regular.woff2',
  'fonts/Nekst/Nekst-Medium.woff2',
  'fonts/Nekst/Nekst-SemiBold.woff2',
  'fonts/Nekst/Nekst-Bold.woff2',
  'fonts/Nekst/Nekst-Black.woff2',
  'fonts/Inter/Inter-Light.woff2',
  'fonts/Inter/Inter-Regular.woff2',
  'fonts/Inter/Inter-Medium.woff2',
  'fonts/Inter/Inter-SemiBold.woff2',
  'fonts/Inter/Inter-Bold.woff2'
];

async function download(rel) {
  const url = `https://thewatch.60fps.fr/assets/${rel}`;
  const dest = path.join('public/assets', rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          console.log('Downloaded:', rel);
          resolve();
        });
      } else {
        console.log('Failed:', rel, res.statusCode);
        resolve();
      }
    }).on('error', (e) => {
      console.log('Error:', rel, e.message);
      resolve();
    });
  });
}

(async () => {
  for (const f of fonts) {
    await download(f);
  }
  console.log('Fonts download complete!');
})();
