a = document.querySelectorAll ('.modalbtn');
modal = document.querySelector ('.modal');

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener ('click', () => {
    document.querySelector ('.modalnum').textContent = a[i].value;
    modal.classList.remove ('hidden');
  });
}

document.querySelector ('.closebtn').addEventListener ('click', () => {
  modal.classList.add ('hidden');
});

document.addEventListener ('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add ('hidden');
  }
});
