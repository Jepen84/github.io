

var myImages1 = new Array();
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk2.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk3.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk4.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk5.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk6.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk7.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk8.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk9.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk10.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk11.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk12.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk13.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk14.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk15.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk16.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk17.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk18.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk19.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk20.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk21.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk22.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk23.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk24.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk25.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk26.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk27.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk28.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk29.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk30.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk31.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk32.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk33.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk34.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk35.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk36.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk37.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk38.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk39.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk40.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk41.png");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}