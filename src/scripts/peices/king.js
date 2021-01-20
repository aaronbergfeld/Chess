class King extends Piece {
    constructor(coordinates, color) {
            super(coordinates, color);
    
            this.pieceType = "king"
            this.source = `src/assets/pieces/${color}/${this.pieceType}.png`
        }
    }