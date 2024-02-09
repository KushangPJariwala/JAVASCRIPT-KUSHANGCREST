const c = document.querySelector ('.container');

const a = [1, 2, 3, 4, 5];

a.forEach ((e, i, a) => {
  let html = `<h2>${e}</h2>`;
  c.insertAdjacentHTML ('afterbegin', html);
});
