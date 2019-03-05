var numClick = 0;
let club1 = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png"
let club2 = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png"
let triangle1 = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png"
let triangle2 = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png"
let diamond1 = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png"
let diamond2 = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png"
let spade1 = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png"
let spade2 = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png"
let smiley1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
let smiley2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
let heart1 = "https://cdn.pixabay.com/photo/2012/05/07/18/37/heart-48942_960_720.png"
let heart2 = "https://cdn.pixabay.com/photo/2012/05/07/18/37/heart-48942_960_720.png"
var pic = [club1, club2, diamond1, diamond2, spade1, spade2, triangle1, triangle2, heart1, heart2, smiley1, smiley2];

function restart() {

}

function clubOne() {
  numClick++
  document.getElementById("club1").src = pic[0];
}

function clubTwo() {
  numClick++
  document.getElementById("club2").src = pic[1];
}

function triangleOne() {
  numClick++
  document.getElementById("triangle1").src = pic[6];
}

function triangleTwo() {
  numClick++
  document.getElementById("triangle2").src = pic[7];
}

function diamondOne() {
  numClick++
  document.getElementById("diamond1").src = pic[2];
}

function diamondTwo() {
  numClick++
  document.getElementById("diamond2").src = pic[3];
}

function smileyOne() {
  numClick++
  document.getElementById("smiley1").src = pic[10];
}

function smileyTwo() {
  numClick++
  document.getElementById("smiley2").src = pic[11];
}

function spadeOne() {
  numClick++
  document.getElementById("spade1").src = pic[4];
}

function spadeTwo() {
  numClick++
  document.getElementById("spade2").src = pic[5];
}

function heartOne() {
  numClick++
  document.getElementById("heart1").src = pic[8];
}

function heartTwo() {
  numClick++
  document.getElementById("heart2").src = pic[9];
}

function twoCardsFlipped() {
  if (numClick = 2) {

  }
}
