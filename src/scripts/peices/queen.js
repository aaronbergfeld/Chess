class Queen extends Piece {
    constructor(coordinates, color) {
            super(coordinates, color);
    
            this.pieceType = "queen"
            this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
        }
    }