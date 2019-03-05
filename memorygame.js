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
let heart1 = "https://cdn.pixabay.com/photo/2012/05/07/18/37/heart-48942_960_720.png";
let heart2 = "https://cdn.pixabay.com/photo/2012/05/07/18/37/heart-48942_960_720.png";
var pic = [club1, club2, diamond1, diamond2, spade1, spade2, triangle1, triangle2, heart1, heart2, smiley1, smiley2];

function restart() {

}

function clubOne() {
  numClick++
  clubs++
  document.getElementById("club1").src = pic[0];
  twoCardsFlipped()
}

function clubTwo() {
  numClick++
  clubs++
  document.getElementById("club2").src = pic[1];
  twoCardsFlipped()
}

function triangleOne() {
  numClick++
  triangles++
  document.getElementById("triangle1").src = pic[6];
  twoCardsFlipped()
}

function triangleTwo() {
  numClick++
  triangles++
  document.getElementById("triangle2").src = pic[7];
  twoCardsFlipped()
}

function diamondOne() {
  numClick++
  diamonds++
  document.getElementById("diamond1").src = pic[2];
  twoCardsFlipped()
}

function diamondTwo() {
  numClick++
  diamonds++
  document.getElementById("diamond2").src = pic[3];
  twoCardsFlipped()
}

function smileyOne() {
  numClick++
  smileys++
  document.getElementById("smiley1").src = pic[10];
  twoCardsFlipped()
}

function smileyTwo() {
  numClick++
  smileys++
  document.getElementById("smiley2").src = pic[11];
  twoCardsFlipped()
}

function spadeOne() {
  numClick++
  spades++
  document.getElementById("spade1").src = pic[4];
  twoCardsFlipped()
}

function spadeTwo() {
  numClick++
  spades++
  document.getElementById("spade2").src = pic[5];
  twoCardsFlipped()
}

function heartOne() {
  numClick++
  hearts++
  document.getElementById("heart1").src = pic[8];
  twoCardsFlipped()
}

function heartTwo() {
  numClick++
  hearts++
  document.getElementById("heart2").src = pic[9];
  twoCardsFlipped()
}

function twoCardsFlipped() {
  if (numClick == 2) {
    numClick = 0;
    if (clubs == 2) {
      document.getElementById('club1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('club2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    }
    if (diamonds == 2) {
      document.getElementById('diamond1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('diamond2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    }
    if (triangles == 2) {
      document.getElementById('triangle1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('triangle2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    }
    if (smileys == 2) {
      document.getElementById('smiley1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('smiley2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    }
    if (spades == 2) {
      document.getElementById('spade1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('spade2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    }
    if (hearts == 2) {
      document.getElementById('heart1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('heart2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    }
  }
  }
// else if (numClick == 0) {
//    document.getElementById('club1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('club2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('diamond1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('diamond2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('triangle1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('trianlge2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('smiley1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('smiley2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('spade1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('spade2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('heart1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//    document.getElementById('heart2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
//  }
