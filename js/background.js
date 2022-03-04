const img = ["1.jpg", "2.jpg", "3.jpg"];

// 이미지 선택
const chosenImg = img[Math.floor(Math.random()*img.length)];

const createImg = document.createElement("img");
createImg.src = `img/${chosenImg}`;
document.body.appendChild(createImg);