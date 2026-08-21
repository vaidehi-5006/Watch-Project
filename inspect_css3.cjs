const fs = require('fs');
const css = fs.readFileSync('public/assets/index-DSKOTUpi.css', 'utf8');

// Print first 3000 chars of CSS (after font-faces)
const mainCssStart = css.lastIndexOf('@font-face') + 500;
// skip font faces - find first rule after all @font-face
let pos = 0;
let fontFaceCount = 0;
while (true) {
  const nextFF = css.indexOf('@font-face', pos + 1);
  if (nextFF === -1) break;
  pos = nextFF;
  fontFaceCount++;
}
// Now pos is the start of last @font-face, find its closing }
const endOfLastFF = css.indexOf('}', pos);
const afterFonts = css.slice(endOfLastFF + 1, endOfLastFF + 3000);
console.log('CSS after font faces:');
console.log(afterFonts);
