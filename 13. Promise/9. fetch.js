// const getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((val) => val.json())
//     .then((data) => {
//       console.log(data);

//       data.forEach((item) => {
//         const userId = document.createElement("h1");
//         userId.innerText = item.id;

//         const title = document.createElement("h2");
//         title.innerText = item.title;

//         const body = document.createElement("p");
//         body.innerText = item.body;

//         document.querySelector("body").append(userId, title, body);
//       });
//     });
// };

// getData();

// const data = [
//   {
//     id: 1,
//     name: "Hajar",
//     surname: "Abdullayeva",
//   },
//   {
//     id: 2,
//     name: "Nigar",
//     surname: "Abdullayeva",
//   },
// ];

// data.name

const BASE_URL = "https://northwind.vercel.app/api";

const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = res.json();
  return data;
};

const createCard = () => {
  getPosts().then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.style.width = "18rem";
      card.style.border = "1px solid red";
      card.setAttribute("id", item.id);

      const userId = document.createElement("h1");
      userId.innerText = item.id;

      const title = document.createElement("h2");
      title.innerText = item.name;

      const body = document.createElement("p");
      body.innerText = item.quantityPerUnit;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";

      const detailBtn = document.createElement("button");
      detailBtn.innerText = "Detail";

      card.append(userId, title, body, deleteBtn, detailBtn);
      document.querySelector(".container").appendChild(card);

      deleteBtn.addEventListener("click", async (e) => {
        const id = e.target.parentElement.id;

        await fetch(`${BASE_URL}/products/${id}`, {
          method: "DELETE",
        });
      });

      detailBtn.addEventListener("click", async (e) => {
        const id = e.target.parentElement.id;

        const res = fetch(`${BASE_URL}/products/${id}`);
        res
          .then((val) => val.json())
          .then((item) => {
            document.querySelector(".detailContainer").innerHTML = "";

            const card = document.createElement("div");
            card.style.width = "36rem";
            card.style.border = "1px solid red";

            const userId = document.createElement("h1");
            userId.innerText = item.id;

            const title = document.createElement("h2");
            title.innerText = item.name;

            const body = document.createElement("p");
            body.innerText = item.quantityPerUnit;

            const unitsInStock = document.createElement("p");
            unitsInStock.innerText = item.unitsInStock;

            const unitPrice = document.createElement("p");
            unitPrice.innerText = item.unitPrice;

            const discontinued = document.createElement("p");
            discontinued.innerText = item.discontinued;

            card.append(
              userId,
              title,
              body,
              unitsInStock,
              unitPrice,
              discontinued
            );

            document.querySelector(".detailContainer").appendChild(card);
          });
      });
    });
  });
};

createCard();
