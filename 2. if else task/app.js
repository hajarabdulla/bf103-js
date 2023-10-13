const DEF_USERNAME = "Hajar";
const DEF_PASSWORD = "123";

const username = prompt("Enter the username");

if (!username) {
  console.log("Canceled");
} else {
  if (username != DEF_USERNAME) {
    console.log("Wrong username");
  } else {
    const password = prompt("Enter the password");

    if (!password) {
      console.log("Canceled");
    } else {
      if (password != DEF_PASSWORD) {
        console.log("I don't know you");
      } else {
        console.log("Welcome");
      }
    }
  }
}
