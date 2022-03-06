const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDoarr = [];
const TODO_KEY = "toDo";

// localStorage에 toDoarr 저장
function savedtoDoarr() {
  localStorage.setItem("toDo", JSON.stringify(toDoarr));
}


// toDo 삭제
function deleteToDo(event) {
  const deleteToDo = event.target.parentElement;
  deleteToDo.remove();
  toDoarr = toDoarr.filter((todo) => todo.id !== parseInt(deleteToDo.id));
  savedtoDoarr();
}


// 화면에 todo 출력
function paintToDo(toDoObject) {
  const createList = document.createElement("li");
  const createSpan = document.createElement("span");
  const createButton = document.createElement("button");
  createList.id = toDoObject.id;
  createSpan.innerText = toDoObject.todo; 
  createButton.innerText = "X";
  createButton.addEventListener("click", deleteToDo);
  createList.appendChild(createSpan);
  createList.appendChild(createButton);
  toDoList.appendChild(createList);
}


// toDO 입력하면 localStorage에 저장
function handleToDoForm(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  const toDoObject = {
    todo: toDoValue,
    id: Date.now(),
  };
  toDoarr.push(toDoObject);
  savedtoDoarr();
  paintToDo(toDoObject);
}

toDoForm.addEventListener("submit", handleToDoForm);

// 새로고침 했을 경우 todo 불러오기
const savedToDo = localStorage.getItem(TODO_KEY);
if(savedToDo) {
  const parsedToDo = JSON.parse(savedToDo);
  toDoarr = parsedToDo;
  toDoarr.forEach(paintToDo);
}