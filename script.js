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
    this.height
  }
}

const switchCards = (id) => {
  gallery.innerHTML = "";
  const selectedPage = id.replace(".", " ").replace("-btn", " ");
}

buttons.forEach((button) => {
  button.addEventListener("click", switchCards(button.id));
});
