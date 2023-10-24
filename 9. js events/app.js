const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
    name: "Phone",
    brand: "Samsung",
    price: 900,
  },
  {
    id: 2,
    name: "Notebook",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    brand: "Apple",
    price: 1500,
  },
  {
    id: 3,
    name: "Refrigirator",
    img: "https://images.unsplash.com/photo-1596656060545-3637d55148a4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnaXJhdG9yfGVufDB8fDB8fHww",
    brand: "Bosch",
    price: 2000,
  },
];

const container = document.querySelector("section");
const form = document.querySelector(".container");
const nameInput = document.querySelector("#name");
const brandInput = document.querySelector("#brand");
const priceInput = document.querySelector("#price");
const imageInput = document.querySelector("#image");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  products.push({
    img: imageInput.value,
    name: nameInput.value,
    brand: brandInput.value,
    price: priceInput.value,
  });

  container.innerHTML = "";
  products.map((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card");
    productCard.style.width = "18rem";

    const productImage = document.createElement("img");
    productImage.setAttribute("src", item.img);
    productCard.classList.add("card-img-top");
    productImage.style.height = "15rem";

    const productDesc = document.createElement("div");
    productDesc.classList.add("card-body");

    const productTitle = document.createElement("h5");
    productTitle.classList.add("card-title");
    productTitle.innerText = `${item.brand} - ${item.name}`;

    const productPrice = document.createElement("p");
    productPrice.classList.add("card-text");
    productPrice.innerText = item.price;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.innerText = "Delete";

    productDesc.append(productTitle, productPrice, deleteBtn);
    productCard.append(productImage, productDesc);

    container.appendChild(productCard);
  });
});
