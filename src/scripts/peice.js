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

    load() {
        this.centerX = this.boardSquare.x + (squareSize / 2);
        this.centerY = this.boardSquare.y + (squareSize / 2);
        this.image = loadImage(this.source);
        this.x = this.centerX;
        this.y = this.centerY;
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
    constructor(coordinates = [], color, source = '') {
        super(source, coordinates, color);

        var x = coordinates[0];
        var y = coordinates[1];
        this.boardSquare = gameBoard.grid[y][x];
        this.boardSquare.hasPeice = true;
        this.color = color;
        this.peiceType = "pawn"
        this.source = `src/assets/peices/${color}/pawn.png`
    }
}