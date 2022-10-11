const setBackgroundImg = document.querySelector("#backgrounds");
const images = [
  "1.jpg",
  "2.jpg",
  "4.jpg",
  "6.jpg",
  "7.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
setBackgroundImg.appendChild(bgImage);

// document.body.appendChild(bgImage);