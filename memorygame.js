var numClick = 0;
var clubs = 0;
var diamonds = 0;
var triangles = 0;
var smileys = 0;
var spades = 0;
var hearts = 0;
let club = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let triangle = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let diamond = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let spade = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let smiley = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
let heart = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";

let zero = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let one = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let two = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let three = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
let four = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let five = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let six = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let seven = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
let eight = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let nine = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
let ten = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let eleven = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";

var pic = [club, diamond, spade, triangle, heart, smiley];
var cards = [
  [zero, one, two, three],
  [four, five, six, seven],
  [eight, nine, ten, eleven],
];
//var ids = ["club1", "club2", "triangle1", "triangle2", "diamond1", "diamond2", "spade1", "spade2", "heart1", "heart2", "smiley1", "smiley2"]
var shuffleButton = document.getElementById("shuffle")
function shuffle() {
  cards[0].sort(function(a, b){return 0.5 - Math.random()});
  cards[1].sort(function(a, b){return 0.5 - Math.random()});
  cards[2].sort(function(a, b){return 0.5 - Math.random()});
  //ids.sort(function(a, b){return 0.5 - Math.random()});
  triangles = 0;
  clubs = 0;
  smileys = 0;
  hearts = 0;
  spades = 0;
  diamonds = 0;
    document.getElementById('club1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('club2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('diamond1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('diamond2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('triangle1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('triangle2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('smiley1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('smiley2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('spade1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('spade2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('heart1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('heart2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";

  //  document.getElementById('club1').id=ids[0];
  //  document.getElementById('club2').id=ids[1];
  //  document.getElementById('diamond1').id=ids[2];
  //  document.getElementById('diamond2').id=ids[3];
  //  document.getElementById('triangle1').id=ids[4];
  //  document.getElementById('triangle2').id=ids[5];
  //  document.getElementById('smiley1').id=ids[6];
  //  document.getElementById('smiley2').id=ids[7];
  //  document.getElementById('spade1').id=ids[8];
  //  document.getElementById('spade2').id=ids[9];
  //  document.getElementById('heart1').id=ids[10];
  //  document.getElementById('heart2').id=ids[11];

  document.getElementById('club1').style.display = "block"
  document.getElementById('club2').style.display = "block"
  document.getElementById('diamond1').style.display = "block"
  document.getElementById('diamond2').style.display = "block"
  document.getElementById('triangle1').style.display = "block"
  document.getElementById('triangle2').style.display = "block"
  document.getElementById('smiley1').style.display = "block"
  document.getElementById('smiley2').style.display = "block"
  document.getElementById('spade1').style.display = "block"
  document.getElementById('spade2').style.display = "block"
  document.getElementById('heart1').style.display = "block"
  document.getElementById('heart2').style.display = "block"
  document.getElementById("shuffle").style.display = "none"
}

function playAgain() {
  cards[0].sort(function(a, b){return 0.5 - Math.random()});
  cards[1].sort(function(a, b){return 0.5 - Math.random()});
  cards[2].sort(function(a, b){return 0.5 - Math.random()});
  triangles = 0;
  clubs = 0;
  smileys = 0;
  hearts = 0;
  spades = 0;
  diamonds = 0;
    document.getElementById('club1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('club2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('diamond1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('diamond2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('triangle1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('triangle2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('smiley1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('smiley2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('spade1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('spade2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('heart1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('heart2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";

  //  document.getElementById('club1').id=ids[0];
  //  document.getElementById('club2').id=ids[1];
  //  document.getElementById('diamond1').id=ids[2];
  //  document.getElementById('diamond2').id=ids[3];
  //  document.getElementById('triangle1').id=ids[4];
  //  document.getElementById('triangle2').id=ids[5];
  //  document.getElementById('smiley1').id=ids[6];
  //  document.getElementById('smiley2').id=ids[7];
  //  document.getElementById('spade1').id=ids[8];
  //  document.getElementById('spade2').id=ids[9];
  //  document.getElementById('heart1').id=ids[10];
  //  document.getElementById('heart2').id=ids[11];
  document.getElementById("playAgain").style.display = "none"
}

function cellOne() {
  numClick++
  //if statements that say if the given cell is a club or triangle or etc. it corresponds with the addition of the variable.
  if (cards[0][0] === zero || cards[0][0] === five) {
    clubs++
  } else if (cards[0][0] === four || cards[0][0] === six) {
    triangles++
  } else if (cards[0][0] === two || cards[0][0] === ten) {
    spades++
  } else if (cards[0][0] === one || cards[0][0] === eight) {
    diamonds++
  } else if (cards[0][0] === seven || cards[0][0] === nine) {
    hearts++
  } else if (cards[0][0] === three || cards[0][0] === eleven) {
    smileys++
  }

  document.getElementById("club1").src = cards[0][0];
}

function cellTwo() {
  numClick++
  if (cards[0][1] === zero || cards[0][1] === five) {
    clubs++
  } else if (cards[0][1] === four || cards[0][1] === six) {
    triangles++
  } else if (cards[0][1] === two || cards[0][1] === ten) {
    spades++
  } else if (cards[0][1] === one || cards[0][1] === eight) {
    diamonds++
  } else if (cards[0][1] === seven || cards[0][1] === nine) {
    hearts++
  } else if (cards[0][1] === three || cards[0][1] === eleven) {
    smileys++
  }
  document.getElementById("diamond1").src = cards[0][1];
}

function cellThree() {
  numClick++
  if (cards[0][2] === zero || cards[0][2] === five) {
    clubs++
  } else if (cards[0][2] === four || cards[0][2] === six) {
    triangles++
  } else if (cards[0][2] === two || cards[0][2] === ten) {
    spades++
  } else if (cards[0][2] === one || cards[0][2] === eight) {
    diamonds++
  } else if (cards[0][2] === seven || cards[0][2] === nine) {
    hearts++
  } else if (cards[0][2] === three || cards[0][2] === eleven) {
    smileys++
}
  document.getElementById("spade1").src = cards[0][2];
}

function cellFour() {
  numClick++
  if (cards[0][3] === zero || cards[0][3] === five) {
    clubs++
  } else if (cards[0][3] === four || cards[0][3] === six) {
    triangles++
  } else if (cards[0][3] === two || cards[0][3] === ten) {
    spades++
  } else if (cards[0][3] === one || cards[0][3] === eight) {
    diamonds++
  } else if (cards[0][3] === seven || cards[0][3] === nine) {
    hearts++
  } else if (cards[0][3] === three || cards[0][3] === eleven) {
    smileys++
  }
  document.getElementById("smiley1").src = cards[0][3];
}

function cellFive() {
  numClick++
  if (cards[1][0] === zero || cards[1][0] === five) {
    clubs++
  } else if (cards[1][0] === four || cards[1][0] === six) {
    triangles++
  } else if (cards[1][0] === two || cards[1][0] === ten) {
    spades++
  } else if (cards[1][0] === one || cards[1][0] === eight) {
    diamonds++
  } else if (cards[1][0] === seven || cards[1][0] === nine) {
    hearts++
  } else if (cards[1][0] === three || cards[1][0] === eleven) {
    smileys++
  }

  document.getElementById("triangle1").src = cards[1][0];
}

function cellSix() {
  numClick++
  if (cards[1][1] === zero || cards[1][1] === five) {
    clubs++
  } else if (cards[1][1] === four || cards[1][1] === six) {
    triangles++
  } else if (cards[1][1] === two || cards[1][1] === ten) {
    spades++
  } else if (cards[1][1] === one || cards[1][1] === eight) {
    diamonds++
  } else if (cards[1][1] === seven || cards[1][1] === nine) {
    hearts++
  } else if (cards[1][1] === three || cards[1][1] === eleven) {
    smileys++
  }
  document.getElementById("club2").src = cards[1][1];
}

function cellSeven() {
  numClick++
  if (cards[1][2] === zero || cards[1][2] === five) {
    clubs++
  } else if (cards[1][2] === four || cards[1][2] === six) {
    triangles++
  } else if (cards[1][2] === two || cards[1][2] === ten) {
    spades++
  } else if (cards[1][2] === one || cards[1][2] === eight) {
    diamonds++
  } else if (cards[1][2] === seven || cards[1][2] === nine) {
    hearts++
  } else if (cards[1][2] === three || cards[1][2] === eleven) {
    smileys++
  }
  document.getElementById("triangle2").src = cards[1][2];
}

function cellEight() {
  numClick++
  if (cards[1][3] === zero || cards[1][3] === five) {
    clubs++
  } else if (cards[1][3] === four || cards[1][3] === six) {
    triangles++
  } else if (cards[1][3] === two || cards[1][3] === ten) {
    spades++
  } else if (cards[1][3] === one || cards[1][3] === eight) {
    diamonds++
  } else if (cards[1][3] === seven || cards[1][3] === nine) {
    hearts++
  } else if (cards[1][3] === three || cards[1][3] === eleven) {
    smileys++
  }
  document.getElementById("heart1").src = cards[1][3];
}

function cellNine() {
  numClick++
  if (cards[2][0] === zero || cards[2][0] === five) {
    clubs++
  } else if (cards[2][0] === four || cards[2][0] === six) {
    triangles++
  } else if (cards[2][0] === two || cards[2][0] === ten) {
    spades++
  } else if (cards[2][0] === one || cards[2][0] === eight) {
    diamonds++
  } else if (cards[2][0] === seven || cards[2][0] === nine) {
    hearts++
  } else if (cards[2][0] === three || cards[2][0] === eleven) {
    smileys++
  }
  document.getElementById("diamond2").src = cards[2][0];
}

function cellTen() {
  numClick++
  if (cards[2][1] === zero || cards[2][1] === five) {
    clubs++
  } else if (cards[2][1] === four || cards[2][1] === six) {
    triangles++
  } else if (cards[2][1] === two || cards[2][1] === ten) {
    spades++
  } else if (cards[2][1] === one || cards[2][1] === eight) {
    diamonds++
  } else if (cards[2][1] === seven || cards[2][1] === nine) {
    hearts++
  } else if (cards[2][1] === three || cards[2][1] === eleven) {
    smileys++
  }
  document.getElementById("heart2").src = cards[2][1];
}

function cellEleven() {
  numClick++
  if (cards[2][2] === zero || cards[2][2] === five) {
    clubs++
  } else if (cards[2][2] === four || cards[2][2] === six) {
    triangles++
  } else if (cards[2][2] === two || cards[2][2] === ten) {
    spades++
  } else if (cards[2][2] === one || cards[2][2] === eight) {
    diamonds++
  } else if (cards[2][2] === seven || cards[2][2] === nine) {
    hearts++
  } else if (cards[2][2] === three || cards[2][2] === eleven) {
    smileys++
  }
  document.getElementById("spade2").src = cards[2][2];
}

function cellTwelve() {
  numClick++
  if (cards[2][3] === zero || cards[2][3] === five) {
    clubs++
  } else if (cards[2][3] === four || cards[2][3] === six) {
    triangles++
  } else if (cards[2][3] === two || cards[2][3] === ten) {
    spades++
  } else if (cards[2][3] === one || cards[2][3] === eight) {
    diamonds++
  } else if (cards[2][3] === seven || cards[2][3] === nine) {
    hearts++
  } else if (cards[2][3] === three || cards[2][3] === eleven) {
    smileys++
  }
  document.getElementById("smiley2").src = cards[2][3];
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

function win() {
  if (document.getElementById('club1').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('club2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('triangle1').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('triangle2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('diamond1').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('diamond2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('spade1').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('spade2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('heart2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('heart2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('smiley1').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" &&
      document.getElementById('smiley2').src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png" ) {
      alert("You Win!");
      document.getElementById("playAgain").style.display = "block"
      }
}

//change the id of the cell so it corresponds with the picture.
function idChanger() {
  if (cards[0][0] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][0] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][0] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][0] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][0] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][0] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][0] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][0] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][0] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][0] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][0] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][0] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][1] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][1] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][1] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][1] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][1] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][1] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][1] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][1] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][1] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][1] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][1] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][1] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][2] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][2] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][2] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][2] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][2] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][2] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][2] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][2] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][2] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][2] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][2] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][2] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][3] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][3] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][3] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][3] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][3] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][3] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][3] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][3] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][3] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][3] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][3] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][3] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[1][0] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[1][0] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[1][0] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[1][0] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[1][0] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[1][0] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[1][0] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[1][0] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[1][0] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[1][0] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[1][0] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[1][0] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[1][1] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[1][1] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[1][1] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[1][1] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[1][1] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[1][1] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[1][1] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[1][1] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[1][1] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[1][1] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[1][1] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[1][1] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[1][2] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[1][2] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[1][2] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[1][2] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[1][2] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[1][2] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[1][2] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[1][2] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[1][2] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[1][2] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[1][2] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[1][2] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[1][3] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[1][3] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[1][3] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[1][3] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[1][3] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[1][3] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[1][3] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[1][3] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[1][3] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[1][3] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[1][3] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[1][3] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][0] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][0] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][0] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][0] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][0] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][0] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][0] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][0] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][0] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][0] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][0] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][0] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][0] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][0] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][0] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][0] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][0] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][0] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][0] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][0] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][0] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][0] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][0] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][0] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][0] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][0] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][0] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][0] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][0] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][0] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][0] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][0] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][0] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][0] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][0] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][0] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

  if (cards[0][0] === zero) {
    document.getElementById('club1').id = "club1"
  } else if (cards[0][0] === one) {
    document.getElementById("club1").id = "diamond1"
  } else if (cards[0][0] === two) {
    document.getElementById("club1").id = "spade1"
  } else if (cards[0][0] === three) {
    document.getElementById("club1").id = "smiley1"
  } else if (cards[0][0] === four) {
    document.getElementById("club1").id = "triangle1"
  } else if (cards[0][0] === five) {
    document.getElementById("club1").id = "club2"
  } else if (cards[0][0] === six) {
    document.getElementById("club1").id = "triangle2"
  } else if (cards[0][0] === seven) {
    document.getElementById("club1").id = "heart1"
  } else if (cards[0][0] === eight) {
    document.getElementById("club1").id = "diamond2"
  } else if (cards[0][0] === nine) {
    document.getElementById("club1").id = "heart2"
  } else if (cards[0][0] === ten) {
    document.getElementById("club1").id = "spade2"
  } else if (cards[0][0] === eleven) {
    document.getElementById("club1").id = "smiley2"
  }

}
