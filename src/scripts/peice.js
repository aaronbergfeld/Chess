class Peice{
    source = '';
    image;
    color;
    captured = false;
    size = size - (size/6);
    boardSquare;
    peiceType;
    
    load(){
        this.image = loadImage(this.source);
    }

    display(){
        var x = this.boardSquare.coord[0] + (size/2);
        var y = this.boardSquare.coord[1] + (size/2);
        imageMode(CENTER);
        image(this.image, x, y, this.size, this.size);
    }
}

class Pawn extends Peice{
    constructor(coordinates = [], color, source = ''){
        super(source, coordinates, color);
        var x = coordinates[0];
        var y = coordinates[1];
        this.boardSquare = gameBoard.grid[y][x];
        this.color = color;
        this.peiceType = "pawn"
        

        if (color == "white") {
            this.source = "src/assets/peices/white/pawn.png";
        }
        else if (color == "black") {
            this.source = "src/assets/peices/black/pawn.png"
        }
    }
}