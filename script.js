const gallery = document.getElementById("content");

const buttons = document.querySelectorAll(".page-btn");
const colors = [
  {
    category: "red",
    color: "alizarin",
    hex: "#db2d43"
  },
];
let currentPage = "main";

new Card {
  constructor() {
    this.category
  }

  setCards(ctgr) {
    
    colors.forEach((category) => {}
}

const switchCards = (id) => {
  gallery.innerHTML = "";
  const selected = id.replace(".", " ").replace("-btn", " ");
}

buttons.forEach((button) => {
  button.addEventListener("click", switchCards(button.id));
});
