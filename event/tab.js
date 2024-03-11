// orange
// li 클릭시 orange 클래스를 옮기기
const firstLi = document.querySelector(".list li:first-child");
const secondLi = document.querySelector(".list li:nth-child(2");
const thirdLi = document.querySelector(".list li:last-child");

const firstDiv = document.querySelector(".tab-content:first-child");
const secondDiv = document.querySelector(".tab-content:nth-child(2)");
const thirdDiv = document.querySelector(".tab-content:last-child");

firstLi.addEventListener("click", () => {
  // 다른 li에 orange 제거
  secondLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  firstLi.classList.add("orange");

  secondDiv.classList.remove("show");
  thirdDiv.classList.remove("show");
  firstDiv.classList.add("show");
});

secondLi.addEventListener("click", () => {
  firstLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  secondLi.classList.add("orange");

  firstDiv.classList.remove("show");
  thirdDiv.classList.remove("show");
  secondDiv.classList.add("show");
});

thirdLi.addEventListener("click", () => {
  firstLi.classList.remove("orange");
  secondLi.classList.remove("orange");
  thirdLi.classList.add("orange");

  firstDiv.classList.remove("show");
  secondDiv.classList.remove("show");
  thirdDiv.classList.add("show");
});
