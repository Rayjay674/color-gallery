const mainPageBtn = document.getElementById("title-btn");
const mainPage = document.getElementById("title");
const colors = ["title", "red", "orange", "yellow", "green", "blue", "purple", "pink", "monochrome"]
const pages = {}
let selected = pageArr[0];
let currentPage = pageArr[0]

const getPages = () => {
  colors.forEach((id) => {})
}

const switchPages = (btnId) => {
  let count = 0;
  let index2 = 0;
  pageIdArr.forEach((pageId, index) => {
    index = count
    if (pageId === btnId) {
      selected = pageId;
      index2 = index;
    } else {
      count++;
    }
  })
  currentPage.style.display = "none";
  pageArr[index2].style.display = "block";
  currentPage = pageArr[index2];
}

mainPageBtn.addEventListener("click", switchPages("title"));
redPageBtn.addEventListener("click", switchPages("red"));

