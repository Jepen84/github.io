

var myImages1 = new Array();
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki2.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki3.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki4.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki5.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki6.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki7.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki8.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki9.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki10.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki11.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki12.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki13.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki14.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki15.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki16.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki17.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki18.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki19.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki20.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki21.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki22.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki23.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki24.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki25.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki26.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki27.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki28.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki29.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki30.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki31.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki32.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki33.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki34.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki35.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki36.png");
myImages1.push("https://jepen84.github.io/github.io/images/kpmiki37.png");



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}