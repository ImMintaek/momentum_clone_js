const quotes = [
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },
  {
    quote: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스다윈",
  },
  {
    quote: "가난은 가난하다고 느끼는 곳에 존재한다.",
    author: "에머슨",
  },
  {
    quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author: "헨리포드",
  },
  {
    quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
    author: "알베르트 아인슈타인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;