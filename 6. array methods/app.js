// const arr1 = [2, 4, 79, 10]
// const arr2 = [45, 89, 2]
// const arr3 = arr2.concat(arr1)
// const arr3 = [...arr1, ...arr2]

// arr1[2] = 600
// console.log(arr3);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Orange"];
// console.log(fruits.lastIndexOf("Orange"));
// const newArr = fruits.slice(0, 4)
// start, end
// console.log(newArr);
// const newArr = fruits.splice(0, 2)
// fruits.splice(0, 2)
// console.log("splice", fruits);
// console.log("slice", fruits.slice(0, 2));

//! slice array-in ozunu deyishdirmir; splice array-i deyishdirir
//! splice ile array-e deyer elave de ede bilirik.
//! Slice start, end
//! Splice start, length

// const arr = [2, 4, 80, 11, 10, 79, 3]

// console.log(Array.isArray(arr));

// function sortArr(a, b) {
//     return a - b
// }

// const sortArrow = (a, b) => a - b


// arr.sort(sortArrow)
// arr.sort((a, b) => a - b)


// console.log(arr);

//! ForEach,  Every, Some, Map, Filter, Reduce (array iteration methods)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// function test(item, a, array) {
//     console.log(a, item);
//     console.log(array);
// }

// fruits.forEach((item, index, arrayItselft) => {
//     console.log(item, index)
//     console.log(arrayItselft);
// })

// const arr = [76, 80, 22, 39, 4, 53, 41]

//! Eger verilen deyerlerden yalniz 1-i bele olsa sherti odeyirse true qaytarir
//! Eger verilen deyerlerden biri bele olsa sherti odemirse false return edir
// const newArray = arr.some(item => console.log(item > 18))

// const newArr = arr.every((item, index, arr) => {
//     console.log(item);
//     console.log(index);
//     console.log(arr);
//     return item > 18
// })
// console.log(newArr);

// const newArray = arr.filter(item => item > 40)
// console.log(newArray);


// const students = [
//     {
//         name: "Hajar", point: 200
//     },
//     {
//         name: "Nigar", point: 6000
//     },
//     {
//         name: "Elnur", point: 150
//     },
//     {
//         name: "Suleyman", point: 470
//     }
// ]

//! filter hech ne tapmasa bosh array qaytarir
// const newArr = students.filter(item => item.point > 5000)

// console.log(newArr)


// const arr = [76, 80, 22, 39, 4, 53, 41]

// const newArr = arr.forEach((item, index, array) => item + 30);
// console.log(newArr);

// let sum = 0;

// arr.forEach(item => sum += item)

// console.log(sum);

// const SumOfItems = arr.reduce((total, item, index, arr) => {
//     total += item;
//     return total
// }, 20)

// console.log(SumOfItems);


// function test(sum, element) {
//     sum += element
//     return sum
// }

// const sumNums = test()
// console.log(sumNums);

let name = "Hajar"
console.log(name.toLowerCase());