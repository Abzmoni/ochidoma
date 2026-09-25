
const fs = require('fs');

async function main() {
  const q = encodeURIComponent('Och Idoma palace Otukpo');
  const res = await fetch('https://duckduckgo.com/?q=' + q + '&t=h_&iax=images&ia=images');
  const text = await res.text();
  console.log(text.substring(0, 500));
}
main();

