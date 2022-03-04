const quotes = [
  {
    quotes: "Be wary of the man who urges an action in which he himself incurs no risk. 자신은 위험을 무릅쓰고 하지 않을 행동을 충동질 하는 이를 조심하라.",
    author: "Joaquin Setanti  호아킨 세탄티"
  },
  {
    quotes: "Life is pleasant. Death is peaceful. It's the transition that's troublesome. 삶은 즐겁다. 죽음은 평화롭다. 골칫거리는 바로 그 중간과정이다.",
    author: "Isaac Asimov  아이작 아시모프"
  },
  {
    quotes: "Only I can change my life. No one can do it for me. 나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
    author: "Carol Burnett  캐롤 버넷"
  },
  {
    quotes: "They must often change who would be constant in happiness or wisdom. 늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
    author: "Confucius  공자"
  },
  {
    quotes: "It has never been my object to record my dreams, just to realize them. 꿈을 기록하는 것이 나의 목표였던 적은 없다, 꿈을 실현하는 것이 나의 목표이다.",
    author: "Man Ray  만 레이"
  },
  {
    quotes: "We cannot really love anybody with whom we never laugh. 함께 있을 때 웃음이 나오지 않는 사람과는 결코 진정한 사랑에 빠질 수 없다.",
    author: "Agnes Repplier  아그네스 리플라이어"
  },
  {
    quotes: "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself. 믿음이 부족하기 때문에 도전하길 두려워하는 바, 나는 스스로를 믿는다.",
    author: "Muhammad Ali  무하마드 알리"
  },
  {
    quotes: "No man is good enough to govern another man without that other's consent. 누구도 본인의 동의없이 남을 지배할 만큼 훌륭하지는 않다",
    author: "Abraham Lincoln  에이브러햄 링컨"
  },
  {
    quotes: "I'd rather be hated for who I am than be loved for who I'm not. 다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.",
    author: "Kurt Cobain  커트 코베인"
  },
  {
    quotes: "If I have lost confidence in myself, I have the universe against me. 내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
    author: "Ralph Waldo Emerson  랄프 왈도 에머슨"
  }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const random = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[random].quotes;
author.innerText = quotes[random].author;