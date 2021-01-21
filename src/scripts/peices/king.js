class King extends Piece {
    constructor(coordinates, color) {
            super(coordinates, color);
        
            this.pieceType = "king";
            this.source = `src/assets/pieces/${color}/${this.pieceType}.png`;
            this.moved = false;
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
            function checkForKing(newBoardSquare){
                var grid = gameBoard.grid;
                var radius = []

                for (let y = -1; y < 1; y++){
                    if (grid[newY + y] != undefined){
                        for (let x = -1; x < 1; x++) {
                            if (grid[newY + y][newX + x] != undefined){
                                const checkSquare = grid[newY + y][newX + x];
                                if (checkSquare.hasPiece && checkSquare.containsPiece.pieceType == "king")
                                    return false
                            }
                        }
                    }
                }
                return true
            }
            

            if (kingMove && checkForKing(newBoardSquare)){
                return this.checkForPiece(newBoardSquare);
            }
            else return false
        }
    }