const box = document.querySelector(".box");

const a = () => {
  setTimeout(() => {
    box.style.transform = "translate(300px, 100px)";
    setTimeout(() => {
      box.style.backgroundColor = "black";
      setTimeout(() => {
        box.style.width = "400px";
        box.style.height = "400px";
        setTimeout(() => {
          box.style.borderRadius = "50%";
        });
      }, 2000);
    }, 2000);
  }, 2000);
};

a();
