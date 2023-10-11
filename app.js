// console.log("Hello world");
// console.log("Salam Dunya");

// a=6;

// int a =6;

// let, const, var

// let value = 6;

//! primitive and non-primitive(reference)

//! primitive --> number, string, boolean, symbol, bigInt, undefined, null
//! non-primitive --> Object (Array, Object, Date, Regex, Funtion)

//! 5 9 81 76 int
// 5.2 6.9 7.4 (float, double)

// let name = "Hajar";
// let age = 21;
// let surname = "Abdullayeva";
// let isMarried = false;
// let isStudent = true;
// let a = Symbol("a");

// let newNumber;
// let isTeacher = true;

// let x = undefined;
// let y = null;

// console.log(typeof name);
// console.log(name);
// console.log(isMarried); //false
// console.log(typeof isMarried);

// console.log("Firuza", "Rugayya");
// console.log(name, age, surname);
// ("Name: Hajar, surname; A");

// console.log("Name: ", name);
// console.log("Surname: ", surname);

// console.log("type of isTeacher: ", typeof isTeacher);

// Template Literals

// ("Hello, my name is Hajar. I am 22nd years old.");

// console.log("Hello, my name is", name + ". I am", age, "years old.");

// console.log(`Hello, my name is ${name}. I am ${age} years old.`);

// let, const

// const a = 5;
// a = 80;
// console.log(a);

//! camelCase; kabab-case; snake_case; PascalCase

// const _firstName = "Hajar";
// // const first-name = ""
// const $first_name = "djkj";
// const FirstName = "";

// "totalPoint; total-point; total_point; TotalPoint";

// "SCORE"

// let return = "ghjg"

// let num1 = 5;
// let num2 = 3;

// console.log((++num1) ** 2);
// console.log(--num1);

// let num3 = num1 + num2;
// console.log(num3);

// console.log("Cem: ", num1 - num2);

// const power = num1 ** num2;
// console.log(power);

// console.log(5 ** 3);
// console.log(5 ** 2);

// let reminder = num1 % num2;
// console.log(reminder);

// let num1 = 8;
// let num2 = 4;

// num1 = num1 + num2;
// num1 **= num2;
// console.log(num1);
// num1 = 8 + 4;
// num1 = 12

//! == and ===
//! == --> ancaq deyeri yoxlayir
//! === --> hem tipi yoxlayir, hem de deyeri yoxlayir

// let a = 4;
// let b = "4";
// console.log(a === b); //true

// console.log(a !== b);

// console.log(1 < 3 < 2);

//1 < 3 --> true
// true < 2
// true = 1
//false = 0
// console.log(1 > 2 > 3);
// 0 > 3;

// console.log(true === 1);
// console.log("512" < "83");

// console.log("56" + 9);
// console.log(6 + 8 + "7");

// console.log(7 > 4 && 2 > 3);
// true && true == true
// true && false == true
// false && false == false

// console.log(7 > 4 || 2 > 3);

// let a = +("36");
// let b = 5;

// console.log(parseInt(a / b));
// console.log(a - b);

// console.log(5 - "a");

// let a = 5.46464;
// console.log(a.toFixed(3));

// console.log(Boolean(0));

//! truthy -->
// Falsy --> 0, null, undefined, "", " ", false, NaN

// console.log(5 - "a");
// console.log(typeof NaN);

let a = "";
let b = Boolean(a);
console.log(typeof b);

let c = null;
let d = Number(c);

console.log(b);
console.log(d);

