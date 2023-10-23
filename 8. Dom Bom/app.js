console.log(window);

// console.log("innerHeight", window.innerHeight);
// console.log("innerWidth", window.innerWidth);

// window.open("https://www.w3schools.com/jsref/met_win_open.asp");

// console.log("availHeight", window.screen.availHeight);
// console.log("availWidth", window.screen.availWidth);
// console.log("width", window.screen.width);
// console.log("height", window.screen.height);

console.log(window.location.protocol);

// window.location.assign("https://drive.google.com/drive/folders/1Kxwc_k8gM6GNdvXHXJNvCbzzyV2gTVpg")
// window.location =
//   "https://drive.google.com/drive/folders/1Kxwc_k8gM6GNdvXHXJNvCbzzyV2gTVpg";

// window.history.forward();

// confirm("salam")

// setTimeout(() => {
//   console.log("Hello world");
//   document.write("HEllo");
// }, 3000);

const logger = setInterval(() => {
  console.log("Hello world");
}, 3000);

setTimeout(() => {
  clearInterval(logger);
}, 9500);
