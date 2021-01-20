class Piece {
    boardSquare;
    coordinates;
    pieceType;
    centerX;
    centerY;
    source;
    image;
    color;
    x;
    y;
    size = squareSize - (squareSize / 6);
    captured = false;
    isPickedUp = false;
    underMouse = false;

    constructor(coordinates, color) {
        var gridX = coordinates[0];
        var gridY = coordinates[1];
        this.coordinates = coordinates;
        this.boardSquare = gameBoard.grid[gridY][gridX];
        this.boardSquare.hasPiece = true;
        this.boardSquare.containsPiece = this;
        this.color = color;
        this.centerX = this.boardSquare.x + (squareSize / 2);
        this.centerY = this.boardSquare.y + (squareSize / 2);
        this.x = this.centerX;
        this.y = this.centerY;
    }

    load() {this.image = loadImage(this.source)}

    mod(num) {return this.color == "white" ? num : num*-1}

    capture(){
        for (let i = 0; i < gameBoard.pieces.length; i++) {
            const piece = gameBoard.pieces[i];
            if (piece == this)
                gameBoard.pieces.splice(i, 1);
        }
        this.captured = true;
    }

    vertIsClear(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.coordinates[0];
        var oldY = this.coordinates[1];
        var newY = newCoords[1];
        if (newY > oldY) {
            for(var i = oldY; i < newY; i++) {
                var checkSquare = gameBoard.grid[i][oldX];
                if (checkSquare.hasPiece) return false;
            }
            return true
        } else if (newY < oldY) {
            for(var i = oldY; i > newY; i--) {
                var checkSquare = gameBoard.grid[i][oldX];
                if (checkSquare.hasPiece) return false;
            }
            return true
        }
    }
    
    horIsClear(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.coordinates[0];
        var oldY = this.coordinates[1];
        var newX = newCoords[0];
        if (newX > oldX) {
            for(var i = oldX; i < newX; i++) {
                var checkSquare = gameBoard.grid[oldY][i];
                if (checkSquare.hasPiece) return false;
            }
        } else if (newX < oldX) {
            for(var i = oldX; i > newX; i--) {
                var checkSquare = gameBoard.grid[oldY][i];
                if (checkSquare.hasPiece) return false;
            }
        }
        return true
    }

    posDiagIsClear(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.coordinates[0];
        var oldY = this.coordinates[1];
        var newY = newCoords[1];
        var newX = newCoords[0];
        if (newY - oldY > 0) {
            for(var i = 0; i < newY - oldY; i++) {
                var checkSquare = gameBoard.grid[oldY + i][oldX + i];
                if (checkSquare.hasPiece) return false;
            }
            return true
        } else if (newY - oldY < 0) {
            for(var i = 0; i > newY - oldY; i--) {
                var checkSquare = gameBoard.grid[oldY + i][oldX + i];
                if (checkSquare.hasPiece) return false;
            }
            return true
        }
    }

    negDiagIsClear(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.coordinates[0];
        var oldY = this.coordinates[1];
        var newY = newCoords[1];
        var newX = newCoords[0];
        if (newY - oldY > 0) {
            for(var i = 0; i < newY - oldY; i++) {
                var checkSquare = gameBoard.grid[oldY + i][oldX - i];
                if (checkSquare.hasPiece) return false;
            }
            return true
        } else if (newY - oldY < 0) {
            for(var i = 0; i > newY - oldY; i--) {
                var checkSquare = gameBoard.grid[oldY + i][oldX - i];
                if (checkSquare.hasPiece) return false;
            }
            return true
        }
    }

    checkForPiece(newBoardSquare) {
        var otherPiece = newBoardSquare.containsPiece;
        if (otherPiece != null){
            if (otherPiece.color != this.color) {
                otherPiece.capture();
                return true
            } 
            else {
                return false
            }  
        } 
        else {
            return true
        }
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size);
        this.underMouse = (mouseX > this.x - this.size/2) && (mouseX < this.x + this.size/2) && (mouseY > this.y - this.size/2) && (mouseY < this.y + this.size/2);
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






