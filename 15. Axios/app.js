const addBtn = document.querySelector(".add-basket");
const url = "http://localhost:3000/basket";

const getBasket = async () => {
  const res = await axios.get(url);
  console.log(res.data);
  //   response.then((result) => console.log(result.data));
};

getBasket();

const addData = async () => {
  const res = await axios.post(
    url,
    {
      id: 4,
      productName: "Bosch",
      productPrice: 5000,
      count: 1,
      totalPrice: productPrice * count,
    },
    {
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res);
};

addBtn.addEventListener("click", addData);
