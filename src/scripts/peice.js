class Peice {
    source;
    image;
    color;
    boardSquare;
    peiceType;
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
        this.boardSquare.hasPeice = true;
        this.color = color;
        this.centerX = this.boardSquare.x + (squareSize / 2);
        this.centerY = this.boardSquare.y + (squareSize / 2);
        this.x = this.centerX;
        this.y = this.centerY;
    }

    load() {
        this.image = loadImage(this.source);
    }

    // showOnTop(peice){
        
    // }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size);
        this.underMouse = (mouseX > this.x - this.size/2) && (mouseX < this.x + this.size/2) && (mouseY > this.y - this.size/2) && (mouseY < this.y + this.size/2);
    }
}

class Pawn extends Peice {
    constructor(coordinates, color) {
        super(coordinates, color);

        this.peiceType = "pawn"
        this.source = `src/assets/peices/${color}/${this.peiceType}.png`
    }
}

class Knight extends Peice {
    constructor(coordinates, color) {
        super(coordinates, color);

        this.peiceType = "knight"
        this.source = `src/assets/peices/${color}/${this.peiceType}.png`
    }
}

class Rook extends Peice {
constructor(coordinates, color) {
        super(coordinates, color);

        this.peiceType = "rook"
        this.source = `src/assets/peices/${color}/${this.peiceType}.png`
    }
}

class Bishop extends Peice {
constructor(coordinates, color) {
        super(coordinates, color);

        this.peiceType = "bishop"
        this.source = `src/assets/peices/${color}/${this.peiceType}.png`
    }
}

class Queen extends Peice {
constructor(coordinates, color) {
        super(coordinates, color);

        this.peiceType = "queen"
        this.source = `src/assets/peices/${color}/${this.peiceType}.png`
    }
}

class King extends Peice {
constructor(coordinates, color) {
        super(coordinates, color);

        this.peiceType = "king"
        this.source = `src/assets/peices/${color}/${this.peiceType}.png`
    }
}








