class Board {
  lightSquareColor = 255;
  darkSquareColor = 75;
  grid = [];
  boardSize = viewHeight - offset;
  chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  nums =  [];
  pieces = [];

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
        row.push(new BoardSquare(coord, boxX, boxY, [x, y],color));
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

  setupPieces(){
    // ***** Pawns *****
    for (let i = 0; i < 8; i++) {
      this.pieces.push(new Pawn([i, 1], "white"));
      this.pieces.push(new Pawn([i, 6], "black"));
    } 
    // ***** Knights *****
    this.pieces.push(new Knight([2, 0], "white"));
    this.pieces.push(new Knight([2, 7], "black"));
    this.pieces.push(new Knight([5, 0], "white"));
    this.pieces.push(new Knight([5, 7], "black"));
    // ***** Bishops *****
    this.pieces.push(new Bishop([1, 0], "white"));
    this.pieces.push(new Bishop([1, 7], "black"));
    this.pieces.push(new Bishop([6, 0], "white"));
    this.pieces.push(new Bishop([6, 7], "black"));
    // ***** Rooks *****
    this.pieces.push(new Rook([0, 0], "white"));
    this.pieces.push(new Rook([0, 7], "black"));
    this.pieces.push(new Rook([7, 0], "white"));
    this.pieces.push(new Rook([7, 7], "black"));
    // ***** Queens *****
    this.pieces.push(new Queen([3, 7], "black"));
    this.pieces.push(new Queen([3, 0], "white"));
    // ***** Kings******
    this.pieces.push(new King([4, 7], "black"));
    this.pieces.push(new King([4, 0], "white"));
    // Load Images
    for (let i = 0; i < gameBoard.pieces.length; i++) {
      const piece = gameBoard.pieces[i];
      piece.load();
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
  constructor(name, x, y, coordinates, color) {
    this.name = name;
    this.coordinates = coordinates;
    this.color = color;
    this.x = x;
    this.y = y;
    this.hasPiece = false;
    this.containsPiece = null
    this.isUnder;
    


  }

  display() {
    this.isUnder = (mouseX > this.x) && (mouseX < this.x + squareSize) && (mouseY > this.y) && (mouseY < this.y + squareSize);

    fill(this.color);
    square(this.x, this.y, squareSize);
  }
}
