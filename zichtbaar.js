

var myImages1 = new Array();
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar2.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar3.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar4.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar5.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar6.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar7.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar8.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar9.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar10.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar11.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar12.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar13.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar14.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar15.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar16.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar17.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar18.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar19.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar20.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar21.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar22.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar23.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar24.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar25.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar26.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar27.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar28.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar29.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar30.png");
myImages1.push("https://jepen84.github.io/github.io/images/zichtbaar31.png");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}