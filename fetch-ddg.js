async function search() {
  const res = await fetch('https://html.duckduckgo.com/html/?q=Och%27Idoma+palace+otukpo', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const text = await res.text();
  const urls = [...text.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
  console.log(urls.slice(0, 5).join('\n'));
}
search();
