

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
myImages1.push("https://jepen84.github.io/github.io/images/afgangtext19.png");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}