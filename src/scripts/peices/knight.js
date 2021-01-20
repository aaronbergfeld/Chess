class Knight extends Piece {
    constructor(coordinates, color) {
        super(coordinates, color);

        this.pieceType = "knight"
        this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
    }

    validMove(newBoardSquare){
        var newCoords = newBoardSquare.coordinates;
        var oldX = this.coordinates[0];
        var oldY = this.coordinates[1];
        var otherPiece = newBoardSquare.containsPiece;
        var knightMove = (newCoords.equals([oldX+1, oldY+2])) || 
                         (newCoords.equals([oldX-1, oldY+2])) || 
                         (newCoords.equals([oldX+1, oldY-2])) || 
                         (newCoords.equals([oldX-1, oldY-2])) || 
                         (newCoords.equals([oldX+2, oldY+1])) || 
                         (newCoords.equals([oldX-2, oldY+1])) || 
                         (newCoords.equals([oldX+2, oldY-1])) || 
                         (newCoords.equals([oldX-2, oldY-1]));

        if ((knightMove) && (otherPiece != null)){
            if (otherPiece.color != this.color) {
                otherPiece.capture();
                return true
            } 
            else return false;
        } 
        else if (knightMove) return true;
        else return false;
        
    }
}