const prevSlideBtn = document.getElementById("prevSlide");
const display = document.getElementById("display");
const nextSlideBtn = document.getElementById("nextSlide");
let activeSlide = 0;
let slides = [
  {
    id:1,
    title:"lorem",
    desc:"dshdkjashdksahdksahd"
  }
];

function nextSlide() {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
    renderUI(slides[activeSlide]);
  }
  renderUI(slides[activeSlide]);
}
function prevSlide() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
    renderUI(slides[activeSlide]);
  }
  renderUI(slides[activeSlide]);
}
function renderUI(src) {
  display.src = src;
}
nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);
