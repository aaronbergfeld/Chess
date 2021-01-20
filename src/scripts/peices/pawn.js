class Pawn extends Piece {
    constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "pawn"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }

    validMove(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.coordinates[0];
        var oldY = this.coordinates[1];
        var pawnJump = this.color == "white" ? 1 : 6;
        var otherPiece = newBoardSquare.containsPiece;
        
        if ((newCoords.equals([oldX, oldY+this.mod(1)]) || (oldY == pawnJump && newCoords.equals([oldX, oldY+this.mod(2)]) && gameBoard.grid[oldY+this.mod(1)][oldX].hasPiece == false)) && !newBoardSquare.hasPiece){
            return true
        } else if ((otherPiece != null && otherPiece.color != this.color) && (newCoords.equals([oldX+1, oldY+this.mod(1)]) || newCoords.equals([oldX-1, oldY+this.mod(1)]))){
            const enemyPiece = otherPiece;
            enemyPiece.capture();
            return true
        } else {
            return false
        }
    }
}