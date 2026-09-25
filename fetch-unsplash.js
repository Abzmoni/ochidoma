const https = require('https');
https.get('https://unsplash.com/s/photos/nigeria-culture', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = [...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-[^\"?\s]+/g)];
    const unique = [...new Set(urls.map(u => u[0]))];
    console.log(unique.slice(0, 5).join('\n'));
  });
});
