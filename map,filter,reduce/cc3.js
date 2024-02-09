// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5,&& !2, &&4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

humanAge = [];
const calcAverageHumanAge = dogAge => {
  dogAge.map (e => {
    e <= 2 ? humanAge.push (e * 2) : humanAge.push (16 + e * 4);
  });
};

dogAge = [4, 2, 7, 1, 8, 6];

calcAverageHumanAge (dogAge);
console.log ('dogAge', dogAge);
console.log ('humanAge', humanAge);

const adultDogs = humanAge.filter ((e, i) => {
  if (e < 18) {
    console.log (`dog ${i} is adult having age ${dogAge[i]}`);
    return dogAge[i];
  }
});

avgDogs = adultDogs.reduce ((acc, e) => {
  return (e + acc) / adultDogs.length;
}, 0);
avgHumans = humanAge.reduce ((acc, e) => {
  return (e + acc) / humanAge.length;
}, 0);

console.log (`avg human age = ${avgHumans}`);
console.log (`avg adult dogs age = ${avgDogs}`);

a = [1, 2, 3, 4, 2, 5, 3];
console.log (a.indexOf (4));
console.log (a.lastIndexOf (2));
console.log (a.find (e => {}));

const myArr = [1, [2, 10], [3, [4, [5, 6], 8], 7], 8];

const newArr = myArr.flat (4);
console.log (newArr);
