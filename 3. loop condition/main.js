// Hello

// 0 --> 100

//! Task 1
// for (let i = 1; i <= 100; i++) {
//   // code block
//   console.log(i, "Hello world");
// }

//! Task 1 While
// let counter = 1;
// while (counter <= 100) {
//   // code block
//   console.log(counter, "Hello world");
//   counter++;
// }

//! Task 2
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//! Task 2 While
// let Counter = 5;
// while (Counter <= 15) {
//   console.log(Counter);
//   Counter++;
// }

//! Task 3
// 1 --25;
// for (let i = 1; i <= 25; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//! Task 4
// let num = 454635;

// while (num > 0) {
//   let eded = num % 10; //5
//   console.log(eded);
//   num = parseInt(num / 10);
// }

// The most of coding is silent thinking

//! Task 5
// 5-27
// let sum = 0;
// for (let i = 5; i <= 27; i++) {
//   sum += i; //5+6+7+8
// }

// console.log("sum:", sum);

//! Task 6
// 1-10
// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//   factorial *= i; //0
// }

// console.log(factorial);

//! Task 7
// let num = 1234667;
// let sum = 0;

// while (num > 0) {
//   let value = num % 10;
//   num = parseInt(num / 10);
//   //   sum = sum + value;
//   sum += value;
// }

// console.log(sum);

//! Task 8
// let num = 376434156454;

// let lastNum = num % 10;
// let eded;

// while (num > 10) {
//   eded = num % 10;
//   console.log(eded);
//   num = parseInt(num / 10);
// }

// console.log("last eded:", eded);

// console.log("cem:", lastNum + eded);

//! Task 9
// let num = 4765;
// let counter = 0;
// let sumEven = 0;
// let sumOdd = 0;

// while (num) {
//   let eded = num % 10; //6
//   counter++; //2

//   num = parseInt(num / 10);

//   if (counter % 2 == 0) {
//     sumEven += eded;
//   } else {
//     sumOdd += eded;
//   }
// }

// console.log("sumEven:", sumEven);
// console.log("sumOdd:", sumOdd);

//! Task 10
// let num = 74547;
// let counter = 0;

// while (num) {
//   let eded = num % 10;
//   counter++;
//   num = parseInt(num / 10);
// }

// console.log(counter);

//! Break; Continue

// for (let i = 0; i <= 10; i++) {
//   if (i == 4) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i >= 3 && i <= 7) {
//     continue;
//   }
//   console.log(i);
// }
