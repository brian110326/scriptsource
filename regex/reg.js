// 폼에 submit 일어나면 submit 중지 후
// required
// 각각의 input에 내용이 있는지 확인

// value가 어떤 특정 조건을 만족하는지 확인
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = document.querySelector("#userid");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  const regId = /(?=^[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
  const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@$%])[A-Za-z\d!@$%]{8,15}$/;

  // true 자료 : 0을 제외한 숫자, '문자', [], {}
  // false 자료 : 0, '', null, undefined, NaN

  if (!userId.value || regId.test(userId.value) == false) {
    userId.nextElementSibling.classList.add("show");
  } else {
    userId.nextElementSibling.classList.remove("show");
  }

  if (!password.value || regPwd.test(password.value) == false) {
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }

  if (!confirmPassword.value) {
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    confirmPassword.nextElementSibling.classList.remove("show");
  }

  if (password.value != confirmPassword.value) {
    confirmPassword.nextElementSibling.textContent = "비밀번호가 일치하지 않습니다";
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    // password, confirmpassword 둘다 입력 안된 경우 값이 동일하기 때문에
    if (confirmPassword.value) {
      confirmPassword.nextElementSibling.classList.remove("show");
    }
  }
});
