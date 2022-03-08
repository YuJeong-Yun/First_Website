const todoCss = document.getElementById("todoCss");
const todoTurnModeButton = document.getElementById("turnModeTodo");

let mode = "";
const NOW_MODE = "nowMode";

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

const savedMode = localStorage.getItem(NOW_MODE);
if(savedMode == "dark") {
  todoCss.href = "css/todo_dark.css";
  todoTurnModeButton.innerText = "라이트 모드";
}