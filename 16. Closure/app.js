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

const arr = [2, 3, 4];
const [a, ...rest] = arr;
const mysterTwo = [...rest, arr, a];

// [3, 4, 2, 3, 4, 2]

console.log(mysterTwo);

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

// let a = 12;
// let b = 13;
// let c = ++a + b++;
// let d = --a + b++ + --c
// console.log(a+b+c+d);

// document.getElementById("addBtn").addEventListener("click",function(e){
//     let tags = document.getElementsByClassName("test")
//     let nodeTags = document.querySelectorAll(".test")
//     let newTag = document.createElement("p")
//     newTag.classList.add("test")
//     newTag.innerHTML = "new tag"
//     document.querySelector("body").appendChild(newTag)
//     console.log(tags);
//     console.log(nodeTags);
// })

// let users = [
//   {
//     id: 1,
//     name: "lorem",
//   },
//   {
//     id: 2,
//     name: "ipsum",
//   },
// ];

// function searchByName(name = "ipsum") {
//   const target = users.find((user) => user.name == name);

//   if (!target) {
//     return 404;
//   }
//   return target;
// }
// console.log(searchByName());

// let array = [1,2,3,4,5,6]

// function add(){
//     for (let index = 0; index < array.length; index++) {
//         console.log(index);
//     }
//     console.log("out",index);
// }
// add()

// Math.ceil(5.5)
// Math.floor(5.5)
// Math.random() //
// Math.round(5.5)

// document.getElementById("addBtn").addEventListener("click", function (e) {
//   document.getElementById(
//     "screen"
//   ).style.backgroundColor = `rgb(${getRandomRgb()},${getRandomRgb()},${getRandomRgb()})`;
// });

// function getRandomRgb() {
//   let color = Math.ceil((Math.random() * 1000) / (1000 / 255));
//   console.log(color);
//   return color;
// }
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

// func => searchValue

// function searchUser(searchValue) {
//   const filteredUsers = users.filter(user=>user.name.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim()));
//   return filteredUsers;
// }
// console.log(searchUser("le"));
// Rashad => ras
// lorash =>

// document.getElementById("outer").addEventListener("click", function (e) {
//   console.log("outer clicked");
// });

// document.getElementById("middle").addEventListener("click", function (e) {
//   console.log("middle clicked");
// });

// document.getElementById("inner").addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("inner clicked");
// });

// .customSum() => 6

// Array.prototype.customSum = function(e){
//   let total = 0
//   for (let i = 0; i < this.length; i++) {
//     total+=this[i]
//   }
//   return total
// }
// console.log();

// const obj1 = {
//   id:1,
//   name:"rashad",
//   surname:"xalilov"
// }

// const obj2 = {
//   id:1,
//   name:"rashad",
//   surname:"xalilov"
// }
// console.log(obj1.toString() == obj2.toString());

// a =2 ; b= 3 => a=3 b=2

// let a = 2;
// let b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);
// let isComplated = false;
// function sum(a, b) {
//   return new Promise((reject, resolve) => {
//     setTimeout(() => {
//       c = a + b;
//       if (isComplated) {
//         resolve(c);
//       } else {
//         reject("error bas verdi");
//       }
//     }, 2000);
//   });
// }
// function display(c) {
//   console.log(c);
// }

// sum(4, 5)
//   .then(display)
//   .catch((err) => console.log(err));

