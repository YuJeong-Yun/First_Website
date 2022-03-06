const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoBox = document.getElementById("todo-Box")
const plusIcon = document.getElementById("plusIcon");

let toDoarr = [];
const TODO_KEY = "toDo";
const HIDDEN_CLASS = "hidden";
const LINE_CLASS = "lineThrough";

// localStorage에 toDoarr 저장
function savedtoDoarr() {
  localStorage.setItem("toDo", JSON.stringify(toDoarr));
}


// 체크 박스 선택 
function handleCheckBox(event) {
  event.target.parentElement.classList.toggle(LINE_CLASS);
}


// toDo 삭제
function deleteToDo(event) {
  const deleteToDo = event.target.parentElement;
  deleteToDo.remove();
  toDoarr = toDoarr.filter((todo) => todo.id !== parseInt(deleteToDo.id));
  savedtoDoarr();
  if(toDoarr.length == 0) {
    toDoBox.classList.add(HIDDEN_CLASS);
  }
}


// 화면에 todo 출력
function paintToDo(toDoObject) {
  const createList = document.createElement("li");
  createList.id = toDoObject.id;
  const createCheck = document.createElement("input");
  createCheck.type = "checkbox";
  createCheck.addEventListener("click", handleCheckBox);
  const createSpan = document.createElement("span");
  createSpan.innerText = toDoObject.todo; 
  const createDelButton = document.createElement("span");
  createDelButton.classList.add("material-icons", "plusIcon");
  createDelButton.innerText = "delete_outline";
  createDelButton.addEventListener("click", deleteToDo);
  createList.appendChild(createCheck);
  createList.appendChild(createSpan);
  createList.appendChild(createDelButton);
  toDoList.appendChild(createList);
}


// toDO 입력하면 localStorage에 저장
function handleToDoForm(event) {
  event.preventDefault();
  if(toDoList.childElementCount == 10) {
    alert("최대 10개 까지만 작성 가능합니다!!!");
  } else if(toDoInput.value != "") {
    toDoBox.classList.remove(HIDDEN_CLASS);
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
}

toDoForm.addEventListener("submit", handleToDoForm);
plusIcon.addEventListener("click", handleToDoForm);



// 새로고침 했을 경우 todo 불러오기
const savedToDo = localStorage.getItem(TODO_KEY);
if(savedToDo && savedToDo != '[]') {
  toDoBox.classList.remove(HIDDEN_CLASS);
  const parsedToDo = JSON.parse(savedToDo);
  toDoarr = parsedToDo;
  toDoarr.forEach(paintToDo);
} 