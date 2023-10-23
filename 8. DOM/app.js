// const body = document.querySelector("body");
// const formButton = document.createElement("button");
// const title = document.querySelector("h1");

// body.appendChild(formButton);
// formButton.innerText = "Click me";

// formButton.addEventListener("click", () => {
//   formButton.style.color = "red";
//   title.style.backgroundColor = "yellowgreen";
// });

const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");

const createList = () => {
  if (!input.value.trim()) {
    input.style.border = "1px solid red";
  } else {
    input.style.border = "1px solid black";

    const listItem = document.createElement("li");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");

    p.innerText = input.value;
    deleteBtn.innerText = "Delete";
    checkBtn.innerText = "Done";

    listItem.style.display = "flex";
    listItem.style.alignItems = "center";

    listItem.append(p, checkBtn, deleteBtn);
    list.appendChild(listItem);

    input.value = "";

    deleteBtn.addEventListener("click", function () {
      this.parentElement.remove();
    });

    checkBtn.addEventListener("click", function () {
      console.log(this.previousElementSibling);
      this.previousElementSibling.classList.toggle("done");
    });
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createList();
});

// click.addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });
