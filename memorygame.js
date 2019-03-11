var numClick = 0;
var clubs = 0;
var diamonds = 0;
var triangles = 0;
var smileys = 0;
var spades = 0;
var hearts = 0;
let club1 = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let club2 = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let triangle1 = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let triangle2 = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let diamond1 = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let diamond2 = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let spade1 = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let spade2 = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let smiley1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
let smiley2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
let heart1 = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
let heart2 = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
var pic = [club1, club2, diamond1, diamond2, spade1, spade2, triangle1, triangle2, heart1, heart2, smiley1, smiley2];

function restart() {

}

function clubOne() {
  numClick++
  clubs++
  document.getElementById("club1").src = pic[0];
}

function clubTwo() {
  numClick++
  clubs++
  document.getElementById("club2").src = pic[1];
}

function triangleOne() {
  numClick++
  triangles++
  document.getElementById("triangle1").src = pic[6];
}

function triangleTwo() {
  numClick++
  triangles++
  document.getElementById("triangle2").src = pic[7];
}

function diamondOne() {
  numClick++
  diamonds++
  document.getElementById("diamond1").src = pic[2];
}

function diamondTwo() {
  numClick++
  diamonds++
  document.getElementById("diamond2").src = pic[3];
}

function smileyOne() {
  numClick++
  smileys++
  document.getElementById("smiley1").src = pic[10];
}

function smileyTwo() {
  numClick++
  smileys++
  document.getElementById("smiley2").src = pic[11];
}

function spadeOne() {
  numClick++
  spades++
  document.getElementById("spade1").src = pic[4];
}

function spadeTwo() {
  numClick++
  spades++
  document.getElementById("spade2").src = pic[5];
}

function heartOne() {
  numClick++
  hearts++
  document.getElementById("heart1").src = pic[8];
}

function heartTwo() {
  numClick++
  hearts++
  document.getElementById("heart2").src = pic[9];
}

function twoCardsFlipped() {
  if (numClick >= 2) {
    numClick = 0;
    if (clubs == 2) {
      document.getElementById('club1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('club2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (clubs == 1) {
      document.getElementById('club1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('club2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      clubs = 0;
    }
    if (diamonds == 2) {
      document.getElementById('diamond1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('diamond2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (diamonds == 1) {
      document.getElementById('diamond1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('diamond2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      diamonds = 0;
    }
    if (triangles == 2) {
      document.getElementById('triangle1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('triangle2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (triangles == 1) {
      document.getElementById('triangle1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('triangle2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      triangles = 0;
    }
    if (smileys == 2) {
      document.getElementById('smiley1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('smiley2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (smileys == 1) {
      document.getElementById('smiley1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('smiley2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      smileys = 0;
    }
    if (spades == 2) {
      document.getElementById('spade1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('spade2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (spades == 1) {
      document.getElementById('spade1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('spade2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      spades = 0;
    }
    if (hearts == 2) {
      document.getElementById('heart1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('heart2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (hearts == 1) {
      document.getElementById('heart1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('heart2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      hearts = 0;
    }
  }
  }
