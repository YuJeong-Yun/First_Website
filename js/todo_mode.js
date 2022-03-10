// Todo 페이지 다크모드 변경
const todoCss = document.getElementById("todoCss");
const todoTurnModeButton = document.getElementById("turnModeTodo");

let mode = "";
const NOW_MODE = "nowMode";

// 모드 변경 버튼 선택 시
function todoTurnAnotherMode() {
  if (todoCss.getAttribute("href") == "css/todo_light.css") {
    todoCss.href = "css/todo_dark.css";
    todoTurnModeButton.innerText = "라이트 모드";
    let mode = "dark";
    localStorage.setItem(NOW_MODE, mode);
  } else {
    todoCss.href = "css/todo_light.css";
    todoTurnModeButton.innerText = "다크 모드";
    let mode = "light";
    localStorage.setItem(NOW_MODE, mode);
  }
}

todoTurnModeButton.addEventListener("click", todoTurnAnotherMode);

// 새로고침 했을 때 다크모드일 경우
const savedMode = localStorage.getItem(NOW_MODE);
if(savedMode == "dark") {
  todoCss.href = "css/todo_dark.css";
  todoTurnModeButton.innerText = "라이트 모드";
}