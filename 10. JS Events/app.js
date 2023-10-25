const input = document.querySelector("#form-input");
const select = document.querySelector("select");

// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// function changeInput(e) {
//   console.log(this);
//   console.log(e.target.value);
// }

// input.onchange = function () {};

// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
//   });

// select.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// innerHeight += ``;

window.addEventListener("keypress", (e) => {
  console.log(e.key); //r
  console.log(e.code); //keyR

  if (e.code == "Space") {
    console.log(e.key);
    document.querySelector("body").style.background = "black";
  }
});

// [
//   {
//     name: "Hajar",
//   },
// ];

// const filteredArr = arr.filter((item) => item.name.includes(input.value));

// function createUsers(array) {
//   array.map((item) => {
//     document.createAttribute;
//   });
// }

// createUsers(arr);

// input.addEventListener("change", () => {
//   createUsers(filteredArr);
// });
