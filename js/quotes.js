const quotes = [
  {
    quotes: "Be wary of the man who urges an action in which he himself incurs no risk.",
    author: "- Joaquin Setanti"
  },
  {
    quotes: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
    author: "- Isaac Asimov"
  },
  {
    quotes: "Only I can change my life. No one can do it for me.",
    author: "- Carol Burnett "
  },
  {
    quotes: "They must often change who would be constant in happiness or wisdom.",
    author: "- Confucius"
  },
  {
    quotes: "It has never been my object to record my dreams, just to realize them.",
    author: "- Man Ray"
  },
  {
    quotes: "We cannot really love anybody with whom we never laugh.",
    author: "- Agnes Repplier"
  },
  {
    quotes: "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself.",
    author: "- Muhammad Ali"
  },
  {
    quotes: "No man is good enough to govern another man without that other's consent.",
    author: "- Abraham Lincoln"
  },
  {
    quotes: "I'd rather be hated for who I am than be loved for who I'm not.",
    author: "- Kurt Cobain"
  },
  {
    quotes: "If I have lost confidence in myself, I have the universe against me.",
    author: "- Ralph Waldo Emerson"
  }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const random = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[random].quotes;
author.innerText = quotes[random].author;