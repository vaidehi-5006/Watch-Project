const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = 'c:/Users/admin/Desktop/Vaidehi/Project/public/assets';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = [
  'watch-DXFPNOEl.glb',
  'envmap-kW4EmG7W.exr',
  'metal-B47qzO42.exr',
  'noise-solid-Lw93M9Kl.png'
];

async function downloadFile(filename) {
  const url = `https://thewatch.60fps.fr/assets/${filename}`;
  const dest = path.join(targetDir, filename);

  return new Promise((resolve, reject) => {
    console.log(`Downloading ${url}...`);
    const fileStream = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const size = fs.statSync(dest).size;
        console.log(`Downloaded ${filename} (${size} bytes) successfully!`);
        resolve(dest);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  for (const f of files) {
    try {
      await downloadFile(f);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log('All exact 60fps assets downloaded!');
})();
