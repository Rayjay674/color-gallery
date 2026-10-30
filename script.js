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

const switchCards = () => {
  const id = event.target.id;
  mainPage.style.display = "none";
  gallery.innerHTML = "";
  currentPage = id.replace(".", " ").replace("-btn", " ").trim();
  if (currentPage === "main") {
    mainPage.style.display = "block";
  } else {
    const selected = colors.filter((item) => item.category === currentPage);
    selected.forEach((item) => {
      const card = new Card(item.category, item.name, item.hex);
    });
}

buttons.forEach((button) => {
  button.addEventListener("click", switchCards);
});
