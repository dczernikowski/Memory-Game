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
var shuffleButton = document.getElementById("shuffle")
function shuffle() {
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

  document.getElementById("playAgain").style.display = "none"
}

function cellOne() {
  numClick++
  //if statements that say if the given cell is a club or triangle or etc. it corresponds with the addition of the variable.
  if (cards[0][0] === zero) {
    clubs++
    document.getElementById("club1").src = cards[0][0];   
  } else if (cards[0][0] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[0][0];   
  } else if (cards[0][0] === two) {
    spades++
    document.getElementById("spade1").src = cards[0][0];   
  } else if (cards[0][0] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[0][0];   
  } else if (cards[0][0] === four {
    triangles++
    document.getElementById("triangle1").src = cards[0][0];   
  } else if (cards[0][0] === five) {
    clubs++
    document.getElementById("club2").src = cards[0][0];   
  } else if (cards[0][0] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[0][0];       
  } else if (cards[0][0] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[0][0];
  } else if (cards[0][0] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[0][0];        
  } else if (cards[0][0] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[0][0];
  } else if (cards[0][0] === ten) {
    spades++
    document.getElementById("spade2").src = cards[0][0];
  } else if (cards[0][0] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[0][0];
  }
}

function cellTwo() {
  numClick++
  if (cards[0][1] === zero) {
    clubs++
    document.getElementById("club1").src = cards[0][1];   
  } else if (cards[0][1] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[0][1];   
  } else if (cards[0][1] === two) {
    spades++
    document.getElementById("spade1").src = cards[0][1];   
  } else if (cards[0][1] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[0][1];   
  } else if (cards[0][1] === four {
    triangles++
    document.getElementById("triangle1").src = cards[0][1];   
  } else if (cards[0][1] === five) {
    clubs++
    document.getElementById("club2").src = cards[0][1];   
  } else if (cards[0][1] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[0][1];       
  } else if (cards[0][1] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[0][1];
  } else if (cards[0][1] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[0][1];        
  } else if (cards[0][1] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[0][1];
  } else if (cards[0][1] === ten) {
    spades++
    document.getElementById("spade2").src = cards[0][1];
  } else if (cards[0][1] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[0][1];
  }
}

function cellThree() {
  numClick++
  if (cards[0][2] === zero) {
    clubs++
    document.getElementById("club1").src = cards[0][2];   
  } else if (cards[0][2] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[0][2];   
  } else if (cards[0][2] === two) {
    spades++
    document.getElementById("spade1").src = cards[0][2];   
  } else if (cards[0][2] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[0][2];   
  } else if (cards[0][2] === four {
    triangles++
    document.getElementById("triangle1").src = cards[0][2];   
  } else if (cards[0][2] === five) {
    clubs++
    document.getElementById("club2").src = cards[0][2];   
  } else if (cards[0][2] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[0][2];       
  } else if (cards[0][2] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[0][2];
  } else if (cards[0][2] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[0][2];        
  } else if (cards[0][2] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[0][2];
  } else if (cards[0][2] === ten) {
    spades++
    document.getElementById("spade2").src = cards[0][2];
  } else if (cards[0][2] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[0][2];
  }
}

function cellFour() {
  numClick++
  if (cards[0][3] === zero) {
    clubs++
    document.getElementById("club1").src = cards[0][3];   
  } else if (cards[0][3] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[0][3];   
  } else if (cards[0][3] === two) {
    spades++
    document.getElementById("spade1").src = cards[0][3];   
  } else if (cards[0][3] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[0][3];   
  } else if (cards[0][3] === four {
    triangles++
    document.getElementById("triangle1").src = cards[0][3];   
  } else if (cards[0][3] === five) {
    clubs++
    document.getElementById("club2").src = cards[0][3];   
  } else if (cards[0][3] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[0][3];       
  } else if (cards[0][3] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[0][3];
  } else if (cards[0][3] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[0][3];        
  } else if (cards[0][3] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[0][3];
  } else if (cards[0][3] === ten) {
    spades++
    document.getElementById("spade2").src = cards[0][3];
  } else if (cards[0][3] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[0][3];
  }
}

function cellFive() {
  numClick++
  if (cards[2][3] === zero) {
    clubs++
    document.getElementById("club1").src = cards[2][3];   
  } else if (cards[2][3] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[2][3];   
  } else if (cards[1][0] === two) {
    spades++
    document.getElementById("spade1").src = cards[1][0];   
  } else if (cards[1][0] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[1][0];   
  } else if (cards[1][0] === four {
    triangles++
    document.getElementById("triangle1").src = cards[1][0];   
  } else if (cards[1][0] === five) {
    clubs++
    document.getElementById("club2").src = cards[1][0];   
  } else if (cards[1][0] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[1][0];       
  } else if (cards[1][0] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[1][0];
  } else if (cards[1][0] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[1][0];        
  } else if (cards[1][0] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[1][0];
  } else if (cards[1][0] === ten) {
    spades++
    document.getElementById("spade2").src = cards[1][0];
  } else if (cards[1][0] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[1][0];
  }
}

function cellSix() {
  numClick++
  if (cards[1][1] === zero) {
    clubs++
    document.getElementById("club1").src = cards[1][1];   
  } else if (cards[1][1] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[1][1];   
  } else if (cards[1][1] === two) {
    spades++
    document.getElementById("spade1").src = cards[1][1];   
  } else if (cards[1][1] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[1][1];   
  } else if (cards[1][1] === four {
    triangles++
    document.getElementById("triangle1").src = cards[1][1];   
  } else if (cards[1][1] === five) {
    clubs++
    document.getElementById("club2").src = cards[1][1];   
  } else if (cards[1][1] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[1][1];       
  } else if (cards[1][1] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[1][1];
  } else if (cards[1][1] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[1][1];        
  } else if (cards[1][1] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[1][1];
  } else if (cards[1][1] === ten) {
    spades++
    document.getElementById("spade2").src = cards[1][1];
  } else if (cards[1][1] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[1][1];
  }
}

function cellSeven() {
  numClick++
  if (cards[2][3] === zero) {
    clubs++
    document.getElementById("club1").src = cards[1][2];   
  } else if (cards[1][2] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[1][2];   
  } else if (cards[1][2] === two) {
    spades++
    document.getElementById("spade1").src = cards[1][2];   
  } else if (cards[1][2] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[1][2];   
  } else if (cards[1][2] === four {
    triangles++
    document.getElementById("triangle1").src = cards[1][2];   
  } else if (cards[1][2] === five) {
    clubs++
    document.getElementById("club2").src = cards[1][2];   
  } else if (cards[1][2] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[1][2];       
  } else if (cards[1][2] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[1][2];
  } else if (cards[1][2] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[1][2];        
  } else if (cards[1][2] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[1][2];
  } else if (cards[1][2] === ten) {
    spades++
    document.getElementById("spade2").src = cards[1][2];
  } else if (cards[1][2] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[1][2];
  }
}

function cellEight() {
  numClick++
  if (cards[1][3] === zero) {
    clubs++
    document.getElementById("club1").src = cards[1][3];   
  } else if (cards[1][3] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[1][3];   
  } else if (cards[1][3] === two) {
    spades++
    document.getElementById("spade1").src = cards[1][3];   
  } else if (cards[1][3] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[1][3];   
  } else if (cards[1][3] === four {
    triangles++
    document.getElementById("triangle1").src = cards[1][3];   
  } else if (cards[1][3] === five) {
    clubs++
    document.getElementById("club2").src = cards[1][3];   
  } else if (cards[1][3] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[1][3];       
  } else if (cards[1][3] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[1][3];
  } else if (cards[1][3] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[1][3];        
  } else if (cards[1][3] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[1][3];
  } else if (cards[1][3] === ten) {
    spades++
    document.getElementById("spade2").src = cards[1][3];
  } else if (cards[1][3] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[1][3];
  }
}

function cellNine() {
  numClick++
  if (cards[2][0] === zero) {
    clubs++
    document.getElementById("club1").src = cards[2][0];   
  } else if (cards[2][0] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[2][0];   
  } else if (cards[2][0] === two) {
    spades++
    document.getElementById("spade1").src = cards[2][0];   
  } else if (cards[2][0] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[2][0];   
  } else if (cards[2][0] === four {
    triangles++
    document.getElementById("triangle1").src = cards[2][0];   
  } else if (cards[2][0] === five) {
    clubs++
    document.getElementById("club2").src = cards[2][0];   
  } else if (cards[2][0] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[2][0];       
  } else if (cards[2][0] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[2][0];
  } else if (cards[2][0] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[2][0];        
  } else if (cards[2][0] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[2][0];
  } else if (cards[2][0] === ten) {
    spades++
    document.getElementById("spade2").src = cards[2][0];
  } else if (cards[2][0] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[2][0];
  }
}

function cellTen() {
  numClick++
  if (cards[2][1] === zero) {
    clubs++
    document.getElementById("club1").src = cards[2][1];   
  } else if (cards[2][1] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[2][1];   
  } else if (cards[2][1] === two) {
    spades++
    document.getElementById("spade1").src = cards[2][1];   
  } else if (cards[2][1] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[2][1];   
  } else if (cards[2][1] === four {
    triangles++
    document.getElementById("triangle1").src = cards[2][1];   
  } else if (cards[2][1] === five) {
    clubs++
    document.getElementById("club2").src = cards[2][1];   
  } else if (cards[2][1] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[2][1];       
  } else if (cards[2][1] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[2][1];
  } else if (cards[2][1] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[2][1];        
  } else if (cards[2][1] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[2][1];
  } else if (cards[2][1] === ten) {
    spades++
    document.getElementById("spade2").src = cards[2][1];
  } else if (cards[2][1] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[2][1];
  }
}

function cellEleven() {
  numClick++
  if (cards[2][2] === zero) {
    clubs++
    document.getElementById("club1").src = cards[2][2];   
  } else if (cards[2][2] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[2][2];   
  } else if (cards[2][2] === two) {
    spades++
    document.getElementById("spade1").src = cards[2][2];   
  } else if (cards[2][2] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[2][2];   
  } else if (cards[2][2] === four {
    triangles++
    document.getElementById("triangle1").src = cards[2][2];   
  } else if (cards[2][2] === five) {
    clubs++
    document.getElementById("club2").src = cards[2][2];   
  } else if (cards[2][2] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[2][2];       
  } else if (cards[2][2] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[2][2];
  } else if (cards[2][2] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[2][2];        
  } else if (cards[2][2] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[2][2];
  } else if (cards[2][2] === ten) {
    spades++
    document.getElementById("spade2").src = cards[2][2];
  } else if (cards[2][2] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[2][2];
  }
}

function cellTwelve() {
  numClick++
  if (cards[2][3] === zero) {
    clubs++
    document.getElementById("club1").src = cards[2][3];   
  } else if (cards[2][3] === one) {
    diamonds++
    document.getElementById("diamond1").src = cards[2][3];   
  } else if (cards[2][3] === two) {
    spades++
    document.getElementById("spade1").src = cards[2][3];   
  } else if (cards[2][3] === three) {
    smileys++
    document.getElementById("smiley1").src = cards[2][3];   
  } else if (cards[2][3] === four {
    triangles++
    document.getElementById("triangle1").src = cards[2][3];   
  } else if (cards[2][3] === five) {
    clubs++
    document.getElementById("club2").src = cards[2][3];   
  } else if (cards[2][3] === six) {
    triangles++
    document.getElementById("triangle2").src = cards[2][3];       
  } else if (cards[2][3] === seven) {
    hearts++
    document.getElementById("heart1").src = cards[2][3];
  } else if (cards[2][3] === eight) {
    diamonds++
    document.getElementById("diamond2").src = cards[2][3];        
  } else if (cards[2][3] === nine) {
    hearts++
    document.getElementById("heart2").src = cards[2][3];
  } else if (cards[2][3] === ten) {
    spades++
    document.getElementById("spade2").src = cards[2][3];
  } else if (cards[2][3] === eleven) {
    smileys++
    document.getElementById("smiley2").src = cards[2][3];
  }
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
    document.getElementById('diamond1').id = "club1"
  } else if (cards[0][1] === one) {
    document.getElementById('diamond1').id = "diamond1"
  } else if (cards[0][1] === two) {
    document.getElementById('diamond1').id = "spade1"
  } else if (cards[0][1] === three) {
    document.getElementById('diamond1').id = "smiley1"
  } else if (cards[0][1] === four) {
    document.getElementById('diamond1').id = "triangle1"
  } else if (cards[0][1] === five) {
    document.getElementById('diamond1').id = "club2"
  } else if (cards[0][1] === six) {
    document.getElementById('diamond1').id = "triangle2"
  } else if (cards[0][1] === seven) {
    document.getElementById('diamond1').id = "heart1"
  } else if (cards[0][1] === eight) {
    document.getElementById('diamond1').id = "diamond2"
  } else if (cards[0][1] === nine) {
    document.getElementById('diamond1').id = "heart2"
  } else if (cards[0][1] === ten) {
    document.getElementById('diamond1').id = "spade2"
  } else if (cards[0][1] === eleven) {
    document.getElementById('diamond1').id = "smiley2"
  }

  if (cards[0][2] === zero) {
    document.getElementById('spade1').id = "club1"
  } else if (cards[0][2] === one) {
    document.getElementById('spade1').id = "diamond1"
  } else if (cards[0][2] === two) {
    document.getElementById('spade1').id = "spade1"
  } else if (cards[0][2] === three) {
    document.getElementById('spade1').id = "smiley1"
  } else if (cards[0][2] === four) {
    document.getElementById('spade1').id = "triangle1"
  } else if (cards[0][2] === five) {
    document.getElementById('spade1').id = "club2"
  } else if (cards[0][2] === six) {
    document.getElementById('spade1').id = "triangle2"
  } else if (cards[0][2] === seven) {
    document.getElementById('spade1').id = "heart1"
  } else if (cards[0][2] === eight) {
    document.getElementById('spade1').id = "diamond2"
  } else if (cards[0][2] === nine) {
    document.getElementById('spade1').id = "heart2"
  } else if (cards[0][2] === ten) {
    document.getElementById('spade1').id = "spade2"
  } else if (cards[0][2] === eleven) {
    document.getElementById('spade1').id = "smiley2"
  }

  if (cards[0][3] === zero) {
    document.getElementById('smiley1').id = "club1"
  } else if (cards[0][3] === one) {
    document.getElementById('smiley1').id = "diamond1"
  } else if (cards[0][3] === two) {
    document.getElementById('smiley1').id = "spade1"
  } else if (cards[0][3] === three) {
    document.getElementById('smiley1').id = "smiley1"
  } else if (cards[0][3] === four) {
    document.getElementById('smiley1').id = "triangle1"
  } else if (cards[0][3] === five) {
    document.getElementById('smiley1').id = "club2"
  } else if (cards[0][3] === six) {
    document.getElementById('smiley1').id = "triangle2"
  } else if (cards[0][3] === seven) {
    document.getElementById('smiley1').id = "heart1"
  } else if (cards[0][3] === eight) {
    document.getElementById('smiley1').id = "diamond2"
  } else if (cards[0][3] === nine) {
    document.getElementById('smiley1').id = "heart2"
  } else if (cards[0][3] === ten) {
    document.getElementById('smiley1').id = "spade2"
  } else if (cards[0][3] === eleven) {
    document.getElementById('smiley1').id = "smiley2"
  }

  if (cards[1][0] === zero) {
    document.getElementById('triangle1').id = "club1"
  } else if (cards[1][0] === one) {
    document.getElementById('triangle1').id = "diamond1"
  } else if (cards[1][0] === two) {
    document.getElementById('triangle1').id = "spade1"
  } else if (cards[1][0] === three) {
    document.getElementById('triangle1').id = "smiley1"
  } else if (cards[1][0] === four) {
    document.getElementById('triangle1').id = "triangle1"
  } else if (cards[1][0] === five) {
    document.getElementById('triangle1').id = "club2"
  } else if (cards[1][0] === six) {
    document.getElementById('triangle1').id = "triangle2"
  } else if (cards[1][0] === seven) {
    document.getElementById('triangle1').id = "heart1"
  } else if (cards[1][0] === eight) {
    document.getElementById('triangle1').id = "diamond2"
  } else if (cards[1][0] === nine) {
    document.getElementById('triangle1').id = "heart2"
  } else if (cards[1][0] === ten) {
    document.getElementById('triangle1').id = "spade2"
  } else if (cards[1][0] === eleven) {
    document.getElementById('triangle1').id = "smiley2"
  }

  if (cards[1][1] === zero) {
    document.getElementById('club2').id = "club1"
  } else if (cards[1][1] === one) {
    document.getElementById("club2").id = "diamond1"
  } else if (cards[1][1] === two) {
    document.getElementById("club2").id = "spade1"
  } else if (cards[1][1] === three) {
    document.getElementById("club2").id = "smiley1"
  } else if (cards[1][1] === four) {
    document.getElementById("club2").id = "triangle1"
  } else if (cards[1][1] === five) {
    document.getElementById("club2").id = "club2"
  } else if (cards[1][1] === six) {
    document.getElementById("club2").id = "triangle2"
  } else if (cards[1][1] === seven) {
    document.getElementById("club2").id = "heart1"
  } else if (cards[1][1] === eight) {
    document.getElementById("club2").id = "diamond2"
  } else if (cards[1][1] === nine) {
    document.getElementById("club2").id = "heart2"
  } else if (cards[1][1] === ten) {
    document.getElementById("club2").id = "spade2"
  } else if (cards[1][1] === eleven) {
    document.getElementById("club2").id = "smiley2"
  }

  if (cards[1][2] === zero) {
    document.getElementById('triangle2').id = "club1"
  } else if (cards[1][2] === one) {
    document.getElementById('triangle2').id = "diamond1"
  } else if (cards[1][2] === two) {
    document.getElementById('triangle2').id = "spade1"
  } else if (cards[1][2] === three) {
    document.getElementById('triangle2').id = "smiley1"
  } else if (cards[1][2] === four) {
    document.getElementById('triangle2').id = "triangle1"
  } else if (cards[1][2] === five) {
    document.getElementById('triangle2').id = "club2"
  } else if (cards[1][2] === six) {
    document.getElementById('triangle2').id = "triangle2"
  } else if (cards[1][2] === seven) {
    document.getElementById('triangle2').id = "heart1"
  } else if (cards[1][2] === eight) {
    document.getElementById('triangle2').id = "diamond2"
  } else if (cards[1][2] === nine) {
    document.getElementById('triangle2').id = "heart2"
  } else if (cards[1][2] === ten) {
    document.getElementById('triangle2').id = "spade2"
  } else if (cards[1][2] === eleven) {
    document.getElementById('triangle2').id = "smiley2"
  }

  if (cards[1][3] === zero) {
    document.getElementById('heart1').id = "club1"
  } else if (cards[1][3] === one) {
    document.getElementById('heart1').id = "diamond1"
  } else if (cards[1][3] === two) {
    document.getElementById('heart1').id = "spade1"
  } else if (cards[1][3] === three) {
    document.getElementById('heart1').id = "smiley1"
  } else if (cards[1][3] === four) {
    document.getElementById('heart1').id = "triangle1"
  } else if (cards[1][3] === five) {
    document.getElementById('heart1').id = "club2"
  } else if (cards[1][3] === six) {
    document.getElementById('heart1').id = "triangle2"
  } else if (cards[1][3] === seven) {
    document.getElementById('heart1').id = "heart1"
  } else if (cards[1][3] === eight) {
    document.getElementById('heart1').id = "diamond2"
  } else if (cards[1][3] === nine) {
    document.getElementById('heart1').id = "heart2"
  } else if (cards[1][3] === ten) {
    document.getElementById('heart1').id = "spade2"
  } else if (cards[1][3] === eleven) {
    document.getElementById('heart1').id = "smiley2"
  }

  if (cards[2][0] === zero) {
    document.getElementById('diamond2').id = "club1"
  } else if (cards[2][0] === one) {
    document.getElementById('diamond2').id = "diamond1"
  } else if (cards[2][0] === two) {
    document.getElementById('diamond2').id = "spade1"
  } else if (cards[2][0] === three) {
    document.getElementById('diamond2').id = "smiley1"
  } else if (cards[2][0] === four) {
    document.getElementById('diamond2').id = "triangle1"
  } else if (cards[2][0] === five) {
    document.getElementById('diamond2').id = "club2"
  } else if (cards[2][0] === six) {
    document.getElementById('diamond2').id = "triangle2"
  } else if (cards[2][0] === seven) {
    document.getElementById('diamond2').id = "heart1"
  } else if (cards[2][0] === eight) {
    document.getElementById('diamond2').id = "diamond2"
  } else if (cards[2][0] === nine) {
    document.getElementById('diamond2').id = "heart2"
  } else if (cards[2][0] === ten) {
    document.getElementById('diamond2').id = "spade2"
  } else if (cards[2][0] === eleven) {
    document.getElementById('diamond2').id = "smiley2"
  }

  if (cards[2][1] === zero) {
    document.getElementById('heart2').id = "club1"
  } else if (cards[2][1] === one) {
    document.getElementById('heart2').id = "diamond1"
  } else if (cards[2][1] === two) {
    document.getElementById('heart2').id = "spade1"
  } else if (cards[2][1] === three) {
    document.getElementById('heart2').id = "smiley1"
  } else if (cards[2][1] === four) {
    document.getElementById('heart2').id = "triangle1"
  } else if (cards[2][1] === five) {
    document.getElementById('heart2').id = "club2"
  } else if (cards[2][1] === six) {
    document.getElementById('heart2').id = "triangle2"
  } else if (cards[2][1] === seven) {
    document.getElementById('heart2').id = "heart1"
  } else if (cards[2][1] === eight) {
    document.getElementById('heart2').id = "diamond2"
  } else if (cards[2][1] === nine) {
    document.getElementById('heart2').id = "heart2"
  } else if (cards[2][1] === ten) {
    document.getElementById('heart2').id = "spade2"
  } else if (cards[2][1] === eleven) {
    document.getElementById('heart2').id = "smiley2"
  }

  if (cards[2][2] === zero) {
    document.getElementById('spade2').id = "club1"
  } else if (cards[2][2] === one) {
    document.getElementById('spade2').id = "diamond1"
  } else if (cards[2][2] === two) {
    document.getElementById('spade2').id = "spade1"
  } else if (cards[2][2] === three) {
    document.getElementById('spade2').id = "smiley1"
  } else if (cards[2][2] === four) {
    document.getElementById('spade2').id = "triangle1"
  } else if (cards[2][2] === five) {
    document.getElementById('spade2').id = "club2"
  } else if (cards[2][2] === six) {
    document.getElementById('spade2').id = "triangle2"
  } else if (cards[2][2] === seven) {
    document.getElementById('spade2').id = "heart1"
  } else if (cards[2][2] === eight) {
    document.getElementById('spade2').id = "diamond2"
  } else if (cards[2][2] === nine) {
    document.getElementById('spade2').id = "heart2"
  } else if (cards[2][2] === ten) {
    document.getElementById('spade2').id = "spade2"
  } else if (cards[2][2] === eleven) {
    document.getElementById('spade2').id = "smiley2"
  }

  if (cards[2][3] === zero) {
    document.getElementById('smiley2').id = "club1"
  } else if (cards[2][3] === one) {
    document.getElementById('smiley2').id = "diamond1"
  } else if (cards[2][3] === two) {
    document.getElementById('smiley2').id = "spade1"
  } else if (cards[2][3] === three) {
    document.getElementById('smiley2').id = "smiley1"
  } else if (cards[2][3] === four) {
    document.getElementById('smiley2').id = "triangle1"
  } else if (cards[2][3] === five) {
    document.getElementById('smiley2').id = "club2"
  } else if (cards[2][3] === six) {
    document.getElementById("smiley2").id = "triangle2"
  } else if (cards[2][3] === seven) {
    document.getElementById('smiley2').id = "heart1"
  } else if (cards[2][3] === eight) {
    document.getElementById('smiley2').id = "diamond2"
  } else if (cards[2][3] === nine) {
    document.getElementById('smiley2').id = "heart2"
  } else if (cards[2][3] === ten) {
    document.getElementById('smiley2').id = "spade2"
  } else if (cards[2][3] === eleven) {
    document.getElementById('smiley2').id = "smiley2"
  }

}
