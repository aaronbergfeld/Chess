class King extends Piece {
    constructor(coordinates, color) {
            super(coordinates, color);
    
            this.pieceType = "king"
            this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
        }

        validMove(newBoardSquare) {
            var newCoords = newBoardSquare.coordinates;
            var oldX = this.coordinates[0];
            var oldY = this.coordinates[1];
            var newY = newCoords[1];
            var newX = newCoords[0];
            var kingMove = (newCoords.equals([oldX+1, oldY+1])) || 
                           (newCoords.equals([oldX+1, oldY])) || 
                           (newCoords.equals([oldX+1, oldY-1])) || 
                           (newCoords.equals([oldX, oldY-1])) || 
                           (newCoords.equals([oldX-1, oldY-1])) || 
                           (newCoords.equals([oldX-1, oldY])) || 
                           (newCoords.equals([oldX-1, oldY+1])) || 
                           (newCoords.equals([oldX, oldY+1]));

            if (kingMove){
                return this.checkForPiece(newBoardSquare);
            }
            else return false
        }
    }