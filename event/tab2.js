// tab.js 수정

const allLi = document.querySelectorAll(".tab-button");

const allDiv = document.querySelectorAll(".tab-content");

allLi.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // 모든 li에 orange 제거
    // 반복문 쓰는 이유 ==> 어디에 orange / show가 있을지 모르기 때문에
    allLi.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 이벤트가 일어난 li orange 클래스명 추가
    e.target.classList.add("orange");

    // 모든 div에 show 제거
    allDiv.forEach((item) => {
      item.classList.remove("show");
    });

    // 현재 이벤트가 일어난 li와 순서가 맞는 div show 추가
    allDiv[idx].classList.add("show");
  });
});
