// const req = fetch (
//   `https://newsapi.org/v2/everything?q=cricket&from=2024-01-04&to=2024-01-04&sortBy=popularity&apiKey=9e7c41c6eaf24dc69b2ed8f00013cb99`
// )
//   .then (req => {
//     return (data = req.json ());
//   })
//   .then (res => {
//     const news = res.articles;
//     news.map (n => {
//       console.log ('n.author', n.author);
//     });
//     // console.log ('res', res);
//   });

const f = async () => {
  console.log ('first');
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json ();
  console.log ('data', data);
  console.log ('hii');
};

f ();
