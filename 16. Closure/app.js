// let counter = 0;

// const increaseCounter = () => {
//   counter++;
// };

// increaseCounter(); //1
// increaseCounter(); //2
// increaseCounter(); //3

// console.log(counter);

// var counter2 = 0;

// const increaseCounter2 = () => {
//   counter++;
//   console.log(counter2);
// };

// increaseCounter2(); //1
// increaseCounter2(); //1
// increaseCounter2(); //1

// const increaseCounter = function () {
//   let counter = 0;

//   return function () {
//     counter++;
//     return counter;
//   };
// };

// const a = increaseCounter();
// a();
// a();
// a();

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     console.log(counter);
//   };
// })();

// add();
// add();
// add();

// const arr = [2, 3, 4];
// const [a, ...rest] = arr;
// const mysterTwo = [...rest, arr, a];

// // [3, 4, 2, 3, 4, 2]

// console.log(mysterTwo);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// const obj = {
//   website: "Algoexpert",
//   logWebsite: () => {
//     console.log(this.website);
//   },
// };

// obj.logWebsite();
