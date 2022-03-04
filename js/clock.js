const clock = document.querySelector("#clock");

// 현재 시간 출력 함수
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 처음 화면에 출력
getClock();
// 1초마다 시간 업데이트
setInterval(getClock,1000);