class Bishop extends Piece {
    constructor(coordinates, color) {
            super(coordinates, color);
    
            this.pieceType = "bishop"
            this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
        }

        validMove(newBoardSquare) {
            var newCoords = newBoardSquare.coordinates;
            var oldX = this.coordinates[0];
            var oldY = this.coordinates[1];
            var newY = newCoords[1];
            var newX = newCoords[0];

            if (newY - oldY == newX - oldX && this.posDiagIsClear(newBoardSquare)){
                return this.checkForPiece(newBoardSquare);
            }
            else if (oldY - newY == newX - oldX && this.negDiagIsClear(newBoardSquare)){
                return this.checkForPiece(newBoardSquare);
            }
        }
    }