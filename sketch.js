var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var nums = ['1', '2', '3', '4', '5', '6', '7', '8'];
nums = nums.reverse();
var offset = 50;

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


