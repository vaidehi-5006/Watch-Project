const fs = require('fs');
const css = fs.readFileSync('public/assets/index-DSKOTUpi.css', 'utf8');

const keywords = ['html{', 'body{', '#app{', '#root{', 'overflow:hidden', 'overflow: hidden', 'circle-svg', '.fps-intro', '.fps-watch', 'width:100vw', 'height:100vh', '.canvas-wrapper', '#canvas-wrapper'];
for (const r of keywords) {
  const idx = css.indexOf(r);
  if (idx !== -1) {
    console.log('\n==', r, '==');
    console.log(css.slice(idx, idx + 200));
  } else {
    console.log('\n== NOT FOUND:', r);
  }
}
