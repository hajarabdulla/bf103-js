const DEF_USERNAME = "Hajar";
const DEF_PASSWORD = "123";

const login = (name, password) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (name !== DEF_USERNAME || password !== DEF_PASSWORD) {
        rej("Invalid credentials");
      } else {
        res(name);
      }
    }, 1500);
  });
};

const welcome = (userName) => {
  console.log(`Welcome ${userName}`);
};

login("Hajar", "123")
  .then((val) => welcome(val))
  .catch((err) => console.log(err));
