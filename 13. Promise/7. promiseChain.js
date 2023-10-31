const promise = new Promise((res, rej) => {
  res("ok");
  rej("not ok");
});

promise
  .then((val) => val + " it is fine")
  .then((returnedVal) => returnedVal + " another addition")
  .then((reReturnedVal) => console.log(reReturnedVal))
  .catch((err) => console.log(err));
