function logger(cb) {
  console.log(cb);
}

// logger("Hello");

// logger();

//! Function-un parametr olaraq func qebul etmeyine callback function deyilir

// const doubleSize = (value) => {
//   return value * 5;
// };

// logger(doubleSize(5));

// const result = doubleSize(6);
// logger(result);

// logger(doubleSize(6));

// const arr = [65, 89, 33, 21, 56];

// function test(elem) {
//   return elem * 5;
// }

// console.log(arr.map(test));

// arr.map((elem) => elem * 5);

// const findNumber = (elem) => {
//   return elem > 40;
// };

// console.log(arr.filter(findNumber));

//! --------------------------------------
// OOP

// const num = new Number(75);
// console.log(num);

// const name = new String ("Salam")

// console.log(name);

//! OOP

const obj = {
  name: "Hajar",
  age: 22,
  surname: "Abdullayeva",
  friends: ["Elnur", "Suleyman", "Nargiz", "Gurban"],
  sayHi: () => "Hello",

  //   sayHello : function() {

  //   }
};

// console.log(obj);

// console.log(obj.name);

// console.log(obj.sayHi());
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj["name"]);
// console.log(obj["age"]);

// class Person {
//   //   name = "Hajar";
//   //   age = 22;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p = new Person("Elnur", 21);
// const p2 = new Person("Nargiz", 22);
// console.log(p);
// console.log(p2);

// class OurNumber {
//   constructor(params) {
//     this.params = params;
//   }
// }

// const num = new OurNumber(89);
// console.log(num);

// const val = new Number(43);
// console.log(val);

// class Person {
//   //   name = "Hajar";
//   //   age = 22;

//   #name;
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   get getName() {
//     console.log(this.#name);
//   }

//   set setName(value) {
//     this.#name = value;
//   }
// }

// const p = new Person("Elnur", 21);

// console.log(p.name);

// p.setName = "Nigar";
// p.getName;

// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     return `${this.name} can eat`;
//   }
// }

// class Student extends Human {
//   constructor(name, isGraduate) {
//     super(name);

//     this.isGraduate = isGraduate;
//   }
// }

// Student.university = "BSU"

// const h1 = new Human("Hajar");
// const s = new Student("Firuza", false);

// Student.prototype.sayHi = function () {
//   console.log("Salam");
// };

// s.sayHi();

// console.log(h1.eat());
// console.log(s.eat());

// console.log(h1);
// console.log(s);

// const arr = [21, 45, 787, 4357];

// Array.prototype.ourMap = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// arr.ourMap((item, index, array)=> {});


const today = new Date();
console.log(today);