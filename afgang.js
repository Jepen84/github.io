

var myImages1 = new Array();
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext2.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext3.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext4.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext5.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext6.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext7.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext8.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext9.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext10.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext11.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext12.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext13.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext14.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext15.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext16.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext17.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext18.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext20.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext21.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext22.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext23.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext24.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext25.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext26.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext27.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext28.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext29.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext30.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext31.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext32.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext33.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext34.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext35.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext36.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext37.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext38.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext39.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext40.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext41.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext42.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext43.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext44.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext45.png");
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext46.png");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}