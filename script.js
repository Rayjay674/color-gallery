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
    
  }

  makeCard {
    const card = document.createElement("div");
    card.classList.add("card")
  }
}

const switchCards = (id) => {
  gallery.innerHTML = "";
  currentPage = id.replace(".", " ").replace("-btn", " ");
}

buttons.forEach((button) => {
  button.addEventListener("click", switchCards(button.id));
});
