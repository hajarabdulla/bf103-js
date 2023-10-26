// localStorage.setItem("name", "Hajar");
// localStorage.setItem("name", "Nigar");
// localStorage.setItem("age", 21);

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name")
// localStorage.clear()
// console.log(localStorage.length);

const userModel = {
  name: "Hajar",
  age: 22,
  university: "ASOIU",
};

localStorage.setItem("user", JSON.stringify(userModel));
console.log(JSON.parse(localStorage.getItem("user")));
console.log(localStorage.getItem("user"));
console.log(JSON.parse(localStorage.getItem("user")).name);

const products = [
  {
    productName: "Apple",
    productPrice: 21,
  },
  {
    productName: "Pineapple",
    productPrice: 40,
  },
];

localStorage.setItem("fruits", JSON.stringify(products));
console.log(JSON.parse(localStorage.getItem("fruits")));
