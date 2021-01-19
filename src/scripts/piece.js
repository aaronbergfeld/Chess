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
        this.color = color;
        this.centerX = this.boardSquare.x + (squareSize / 2);
        this.centerY = this.boardSquare.y + (squareSize / 2);
        this.x = this.centerX;
        this.y = this.centerY;
    }

    load() {
        this.image = loadImage(this.source);
    }

    // showOnTop(piece){
        
    // }

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








