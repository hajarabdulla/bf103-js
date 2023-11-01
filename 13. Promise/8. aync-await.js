// const g = (val) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(val);
//     }, 1500);
//   });
// };

// const f = () => {
// g("Hello")
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));
// };

// f();

//! Async await
const g = (val) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(val);
    }, 1500);
  });
};

const f = async () => {
  const res = await g("Hello");
  console.log(res);
};

async function f1() {
  try {
    const res = await g("Hello");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

// f();
f1();
