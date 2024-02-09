document.querySelector ('.submit').addEventListener ('click', () => {
  const s = document.querySelector ('.s').value;

  //kushang_jariwala_p => kushangJariwala

  let x = s.split ('_'); //[kushsang, jariwala, p]
  for (i = 1; i < x.length; i++) {
    x[i] = x[i][0].toUpperCase () + x[i].slice (1);
  }
  //x=[kushsang, Jariwala, P]

  let ans = x.join ('');
  console.log ('ans', ans);
  document.querySelector ('.output').textContent = ans;
});
