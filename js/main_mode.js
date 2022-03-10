const modeCss = document.getElementById("mainCss");
const modeButton = document.getElementById("turnMode");

let mode = "";
const NOW_MODE = "nowMode";

// 모드 변경 버튼 선택 시
function turnAnotherMode() {
  if (modeCss.getAttribute("href") == "css/light_theme.css") {
    modeCss.href = "css/dark_theme.css";
    modeButton.innerText = "라이트 모드";
    let mode = "dark";
    localStorage.setItem(NOW_MODE, mode);
  } else {
    modeCss.href = "css/light_theme.css";
    modeButton.innerText = "다크 모드";
    let mode = "light";
    localStorage.setItem(NOW_MODE, mode);
  }
}

modeButton.addEventListener("click", turnAnotherMode);

// 새로고침시에 다크모드일 경우
const savedMode = localStorage.getItem(NOW_MODE);
if(savedMode == "dark") {
  modeCss.href = "css/dark_theme.css";
  modeButton.innerText = "라이트 모드";
}