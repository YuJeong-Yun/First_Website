const nameForm = document.getElementById("name-form");
const nameInput = document.querySelector("#name-form input");
const titleName = document.getElementById("title-name");

// localStorage에 저장한 유저 이름 key
const USERNAME_KEY = "username";
// 숨김 속성 클래스 이름
const HIDDEN_CLASS = "hidden";

// 화면에 인사말 출력
function showGreeting(userinput) {
  titleName.classList.remove(HIDDEN_CLASS);
  titleName.innerText = `HELLO ${userinput} :)`;
}

// 폼이 submit되면 이름 저장 & showGreeting 함수 호출
function handleSubmitNameForm(event) {
  event.preventDefault();
  nameForm.classList.add(HIDDEN_CLASS);
  const userinput = nameInput.value;
  localStorage.setItem("username", userinput);
  showGreeting(userinput);
}



// localStorage에서 유저가 저장한 이름 불러오기
savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null) {
  nameForm.classList.remove(HIDDEN_CLASS);
  nameForm.addEventListener("submit", handleSubmitNameForm);
} else {
  showGreeting(savedUsername);
}