const mainPageBtn = document.getElementById("title-btn");
const redPageBtn = document.getElementById("red-btn");
const orangePageBtn = document.getElementById("orange-btn");
const yellowPageBtn = document.getElementById("yellow-btn");
const greenPageBtn = document.getElementById("green-btn");
const bluePageBtn = document.getElementById("blue-btn");
const purplePageBtn = document.getElementById("purple-btn");
const pinkPageBtn = document.getElementById("pink-btn");
const brownPageBtn = document.getElementById("brown-btn");
const monochromePageBtn = document.getElementById("monochrome-btn");   
const mainPage = document.getElementById("title");
const redPage = document.getElementById("red");
const orangePage = document.getElementById("orange");
const yellowPage = document.getElementById("yellow");
const greenPage = document.getElementById("green");
const bluePage = document.getElementById("blue");
const purplePage = document.getElementById("purple");
const pinkPage = document.getElementById("pink");
const brownPage = document.getElementById("brown");
const monochromePage = document.getElementById("monochrome");   
const colors = ["title", "red", "orange", "yellow", "green", "blue", "purple", "pink", "monochrome"]
const pageArr = [mainPage, redPage, orangePage, yellowPage, greenPage, bluePage, purplePage, pinkPage, brownPage, monochromePage]
let selected = pageArr[0];
let currentPage = pageArr[0]

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

