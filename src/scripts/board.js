class Board {
  lightSquareColor = 255;
  darkSquareColor = 75;
  grid = [];
  boardSize = window.innerHeight - offset;
  chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  nums =  [];

  constructor() {
    
    // Create array of numbers 1-8 as strings

    for(var i = 1; i <= 8; i ++) {
      this.nums.push(i.toString());
    }

    // instantiate checkerboard using an 8x8 array of BoardSquare objects

    for (var y = 0; y < 8; y++) {
      var row = [];
      for (let x = 0; x < 8; x++) {
        var boxX = this.boardSize / 8 * x + offset;
        var boxY = this.boardSize / 8 * (7 - y);
        var coord = this.nums[y] + this.chars[x];
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
        row.push(new BoardSquare(coord, [boxX, boxY], color));
      }
      this.grid.push(row);
    }
  }



  setSquareColors(lightSquareColor, darkSquareColor) {
    this.lightSquareColor = lightSquareColor;
    this.darkSquareColor = darkSquareColor;
  }

  showLabels(){
    for (let i = 0; i < 8; i++) {
      var num = this.nums[7 - i];
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
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x ++) {
        const element = this.grid[y][x];
        element.display();
      }
    }
  }
}

class BoardSquare {
  size = (window.innerHeight - offset) / 8;
  constructor(name, coord = [], color = null) {
    this.name = name;
    this.coord = coord;
    this.color = color;
  }

  display() {
    fill(this.color);
    square(this.coord[0], this.coord[1], this.size);
  }
}
