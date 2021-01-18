class Peice {
    source;
    image;
    color;
    boardSquare;
    peiceType;
    x;
    y;

    size = squareSize - (squareSize / 6);
    captured = false;
    isPickedUp = false;
    underMouse = false;

    load() {
        this.image = loadImage(this.source);
        this.x = this.boardSquare.coord[0] + (squareSize / 2);
        this.y = this.boardSquare.coord[1] + (squareSize / 2);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size);
        this.underMouse = (mouseX > this.x - this.size/2) && (mouseX < this.x + this.size/2) && (mouseY > this.y - this.size/2) && (mouseY < this.y + this.size/2);
        console.log(this, this.underMouse);

        if (this.isPickedUp){
            this.x = mouseX;
            this.y = mouseY;
        }

    }
}

class Pawn extends Peice {
    constructor(coordinates = [], color, source = '') {
        super(source, coordinates, color);

        var x = coordinates[0];
        var y = coordinates[1];
        this.boardSquare = gameBoard.grid[y][x];
        this.color = color;
        this.peiceType = "pawn"
        this.source = `src/assets/peices/${color}/pawn.png`
    }
}