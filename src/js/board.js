var offset = 50;

class Board {
  darkSquareColor = null;
  lightSquareColor = null;
  grid = [];
  boardSize = window.innerHeight - offset;
  chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  nums =  ['8', '7', '6', '5', '4', '3', '2', '1'];

  init() {
    this.lightSquareColor = 255;
    this.darkSquareColor = 0;

    for (var y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        var boxX = this.boardSize / 8 * x + offset;
        var boxY = this.boardSize / 8 * y;
        var coord = this.nums[x] + this.chars[y];
        var color;

        var yIsEven = y % 2 == 0;
        var xIsEven = x % 2 == 0;

        if (yIsEven && xIsEven) {
          color = this.darkSquareColor;
        } else if (yIsEven && !xIsEven) {
          color = this.lightSquareColor;
        } else if (!yIsEven && xIsEven) {
          color = this.lightSquareColor;
        } else {
          color = this.darkSquareColor;
        }

        this.grid.push(new ChessSquare(coord, boxX, boxY, color));

      }
    }

    for (let i = 0; i < this.chars.length; i++) {
      const element = this.chars[i];
      var charX = 25;
      var charY = this.boardSize / 8 * i + ChessSquare.size / 2;
      textSize(32);
      fill(0);
      text(element, charX, charY);
    }
  }

  showLabels(){
    for (let i = 0; i < 8; i++) {
      var num = this.nums[i];
      var numX = offset/2;
      var numY = (height - offset)/8 * i + offset+5;
      text(num, numX, numY);
      
      var char = this.chars[i];
      var charX = (width - offset)/8 * i + offset*2 - 5;
      var charY = height - offset/2 + 10
      text(char, charX, charY);
    }
  }

  display() {
    for (let square = 0; square < this.grid.length; square++) {
      const element = this.grid[square];
      element.display();
    }
  }
}

class ChessSquare {
  size = (window.innerHeight - offset) / 8;
  constructor(coord, x = null, y = null, color = null) {
    this.coord = coord;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  display() {
    fill(this.color);
    square(this.x, this.y, this.size);
  }
}
