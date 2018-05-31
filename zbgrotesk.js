

var myImages1 = new Array();
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk2.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk2.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk23.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk24.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk25.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk26.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk27.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk28.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk29.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk210.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk211.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk212.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk213.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk214.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk215.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk216.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk217.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk218.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk219.png");
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
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk230.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk231.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk232.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk233.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk234.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk235.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk236.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk237.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk238.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk239.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk240.png");
myImages1.push("https://jepen84.github.io/github.io/images/zbgrotesk241.png");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}