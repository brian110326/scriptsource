// criteria, keyword 비어있는지 확인

const criteria = document.querySelector("#criteria");
const keyword = document.querySelector("#keyword");

const form = document.querySelector("form");

console.log(criteria.value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (criteria.value == "검색 조건 선택") {
    alert("검색조건을 선택하세요");
    criteria.focus();
    return;
  } else if (!keyword.value) {
    alert("검색어를 입력하세요");
    keyword.focus();
    return;
  }

  form.submit();
});
