const Stu = function (name, id) {
  this.name = name;
  this.id = id;
};

let k = new Stu ('kushang', 26);
console.log ('k.name', k.name);
console.log ('k.id', k.id);

Stu.prototype.display = function () {
  console.log (`${this.name} has id = ${this.id}`);
};
k.display ();

console.log (k.hasOwnProperty ('name'));

a = [1, 3, 2, 4, 2, 5, 6, 3, 7, 8, 4, 7, 0];

Array.prototype.unique = function () {
  return [...new Set (this)];
};
Array.prototype.even = function () {
  return this.filter (e => e % 2 === 0);
};
console.log ('a.unique()', a.unique ());
console.log ('a.even()', a.even ().unique ());

const car = function (s) {
  this.speed = s;
};

const bmw = new car (50);

car.prototype.accelarate = function () {
  return (this.speed += 5);
};
car.prototype.break = function () {
  return (this.speed -= 5);
};

console.log ('bmw.speed', bmw.speed);
console.log ('break : bmw.speed', bmw.break ());
console.log ('accelarate : bmw.speed', bmw.accelarate ());
console.log ('accelarate : bmw.speed', bmw.accelarate ());
console.log ('bmw.speed', bmw.speed);

console.log (a.pop ());
console.log (a);
