// console.log(a);
// console.log(b);

// let a = 5;
// var b = 6;

//! Var hoisting-i support edir, let hoisting-i support etmir

// console.log(window.a);
// console.log(window.b);

//! Let and const are block scope, var is function scope
//! Var global window-a assign edir

//! -------------------
// if (5 === 5) {
//     let b = 12;
//     var a = 5;
// }
// console.log(a); //5
// console.log(b); //Error

//! -------------------
// var x = 1;
// {
//   var x = 2;
//   console.log(x); //2
// }
// var x = 9;
// console.log(x); //2

// let y = 1;
// {
//   let y = 2;
//   console.log(y);//2
// }
// console.log(y);//1

// let x = 1;
// {
//    var x = 2;
//    console.log(x)
// }
// console.log(x)

//! -------------------
// var a = 1;
// var b = 2;

// {
//   var a = 11;
//   let b = 22;

//   console.log(a); //11
//   console.log(b); //22
// }

// var a = 9;

// console.log(a); //11
// console.log(b); //2

//! -------------------
// let x = 1;

// {
//   var x = 2;
// }

// let x = 1;

// {
//   let x = 2;
// }

//! -------------------
// for (var i = 0; i <= 4; i++) {
//   console.log(i);
//   //0-4
// }
// console.log(i); //undefined; 0; 0; 0-4; 0; 4; 0

// "use strict"; function; this (use stict)

// 2009; es5

// i = 5
// console.log(i);

// let a = 5;
// delete a;

// console.log(a);

//! -------------------
// function test() {
//   var c = 30;
// }

// console.log(c);

//! Function Declaration

function logger(value) {
  //   console.log("Salam");
  console.log(`Salam ${value}`);
}

// logger("Hajar");
// logger("Elnur");

// let a = 5;
// let b = 6;

// function findSum(a, b) {
//   console.log(a + b);
// }

// findSum(5, 9);
// findSum(21, 8);

// let totalQuestion = 21;
// let correctAnswer = 6;

// 6/21*100

// function calculatePercenage(correct, total) {
//   console.log(Math.round((correct / total) * 100));
// }

// calculatePercenage(correctAnswer, totalQuestion);

// console.log("round", Math.round(-4.3));
// console.log("round", Math.round(-4.6));

// console.log("floor", Math.floor(-4.3));
// console.log("floor", Math.floor(-4.6));

// console.log("ceil", Math.ceil(-4.3)) ;
// console.log("ceil", Math.ceil(-4.5)) ;

// let randomNumber = Math.round(Math.random() * 100);
// console.log(randomNumber);

//! Function Expression

// logger(4);
// logger(5);

// let logger = function (value) {
//   console.log(value);
// };

// if ([] == []) {
//   console.log("Salam");
// } else {
//   console.log("Sagol");
// }

// const arr = [];
// arr.push(6);

// arr = [6];
// console.log(arr);

//salam , sagol ,

// const arr1 = [2, 5, 7, 9];
// // const arr2 = [...arr1];

// let arr2 = _.clone(arr1);
// arr1[3] = 60;
// arr1.push(70);
// arr2.push(99);

// console.log(arr1); //2,5,7,60,70,99
// console.log(arr2); //2,5,7,60,70,99

// function FindSum(a, b) {
//   return a + b;
// }

// console.log(FindSum(1, 2));

// let sum = FindSum(1, 5);
// console.log(sum);

// function logger(value) {
//   return value;
// }

// console.log(logger("Salam"));

// const arr = [23, 5, 89, 3];
// const arr2 = [40, 1, 23, 5, 89, 3];

// function findMax(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return min;
// }

// console.log(findMax(arr));
// console.log(findMax(arr2));

// const findSum = a => a * 4;

// console.log(findSum(4));

// This keyword

// const findMultiplication = (a, b = 3) => a * b;
// const a = findMultiplication(9, 8);
// console.log(a);

//! this keyword

// Object

// const girl = {
//   name: "Hajar",
//   age: 21,

//   sayHi: function () {
//     "use strict";
//     // console.log(`Salam ${this.name}`);
//     console.log("declaration", this);
//   },

//   sayHello: () => {
//     // console.log(`Salam ${this.name}`);
//     console.log("expression", this);
//   },
// };

// girl.sayHi();
// girl.sayHello();

// const students = [
//   { name: "Firzua", age: 20 },
//   { name: "Rugayya", age: 20 },
//   { name: "Rana", age: 20 },
//   { name: "Orkhan", age: 21 },
// ];

// "use strict"
// function showWindow() {
//   console.log(this);
// }

// showWindow();
