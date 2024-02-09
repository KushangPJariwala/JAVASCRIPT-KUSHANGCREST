const div = document.createElement ('div');
div.textContent = 'hello kushang';
div.style.color = 'blue';
div.classList.add ('txt');
const body = document.body;

body.append (div);

btn = document.createElement ('button');
btn.textContent = 'click';
btn.classList.add ('btn');
body.append (btn);
var flag = 1;
document.querySelector ('.btn').addEventListener ('click', () => {
  flag = !flag;
  console.log ('flag', flag);
  const txt = document.querySelector ('.txt');
  txt.style.color = 'red';
  if (!flag) div.textContent = '  ';
  else if (flag) div.textContent = 'hello kushang';
});

const randomInt = (min, max) =>
  Math.floor (Math.random () * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt (0, 255)}, ${randomInt (0, 255)},${randomInt (0, 255)})`;

sec = document.querySelector ('.section');
function myFunction () {
  let c = randomColor ();
  sec.style.backgroundColor = c;
}

nav = document.querySelector ('.navbar');
nav.addEventListener ('mouseover', function (e) {
  let links = [...this.children];
  links.map (el => {
    if (el !== e.target) {
      el.style.opacity = 0.5;
    }
  });
});
nav.addEventListener ('mouseout', function (e) {
  let links = [...this.children];
  links.map (el => {
    if (el !== e.target) {
      el.style.opacity = 1;
    }
  });
});

const observer = new IntersectionObserver (
  function (entries) {
    entries.forEach (entry => {
      let target = entry.target;
      if (entry.isIntersecting) {
        target.style.backgroundColor = 'red';
        target.style.width = '40%';
        target.style.height = '50vh';
      } else {
        target.style.backgroundColor = 'white';
        target.style.width = '20%';
        target.style.height = '40vh';
      }
    });
  },
  {root: null, threshold: 0.5}
);

let center = document.querySelector ('.center');
[...center.children].forEach (t => {
  observer.observe (t);
});
