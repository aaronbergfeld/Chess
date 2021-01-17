var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

var gameBoard = new Board();

function setup() {
  createCanvas(viewHeight, viewHeight);
  textAlign(CENTER);
  textSize(32);
  gameBoard.init();
}


function draw() {
  background(209, 217, 230);
  gameBoard.display();
  gameBoard.showLabels();
}


