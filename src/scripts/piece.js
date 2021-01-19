class Piece {
    source;
    image;
    color;
    boardSquare;
    pieceType;
    coordinates;
    x;
    centerY;
    centerX;
    y;

    size = squareSize - (squareSize / 6);
    captured = false;
    isPickedUp = false;
    underMouse = false;

    constructor(coordinates, color) {
        var gridX = coordinates[0];
        var gridY = coordinates[1];
        this.boardSquare = gameBoard.grid[gridY][gridX];
        this.boardSquare.hasPiece = true;
        this.boardSquare.containsPiece = this;
        this.color = color;
        this.centerX = this.boardSquare.x + (squareSize / 2);
        this.centerY = this.boardSquare.y + (squareSize / 2);
        this.x = this.centerX;
        this.y = this.centerY;
    }

    load() {
        this.image = loadImage(this.source);
    }

    capture(){
        for (let i = 0; i < gameBoard.pieces.length; i++) {
            const piece = gameBoard.pieces[i];
            if (piece == this)
                gameBoard.pieces.splice(i, 1);
        }
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size);
        this.underMouse = (mouseX > this.x - this.size/2) && (mouseX < this.x + this.size/2) && (mouseY > this.y - this.size/2) && (mouseY < this.y + this.size/2);
    }
}

class Pawn extends Piece {
    constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "pawn"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }

    validMove(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.boardSquare.coordinates[0];
        var oldY = this.boardSquare.coordinates[1];
        var pawnJump = this.color == "white" ? 1 : 6;
        var mod1 = this.color == "white" ? 1 : -1;
        var mod2 = this.color == "white" ? 2 : -2;
        if ((newCoords.equals([oldX, oldY+mod1]) || (oldY == pawnJump && newCoords.equals([oldX, oldY+mod2]))) && !newBoardSquare.hasPiece){
            return true
        } else if ((newBoardSquare.containsPiece != null && newBoardSquare.containsPiece.color != this.color) && (newCoords.equals([oldX+1, oldY+mod1]) || newCoords.equals([oldX-1, oldY+mod1]))){
            const enemyPiece = newBoardSquare.containsPiece;
            enemyPiece.captured = true;
            enemyPiece.capture();
            return true
        } else {
            return false
        }
    }
}

class Knight extends Piece {
    constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "knight"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }
}

class Rook extends Piece {
constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "rook"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }
}

class Bishop extends Piece {
constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "bishop"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }
}

class Queen extends Piece {
constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "queen"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }
}

class King extends Piece {
constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "king"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }
}

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}






