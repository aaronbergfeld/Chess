class Player{
    isHoldingPiece = false;
    pieceInHand = null;

    pickUp(piece){
        this.isHoldingPiece = true;
        this.pieceInHand = piece;
        piece.isPickedUp = true;
        piece.boardSquare.containsPiece = null;
        piece.boardSquare.hasPiece = false;
    }

    move(piece){
        this.pieceInHand.x = mouseX;
        this.pieceInHand.y = mouseY;
    }

    drop(piece){
        for (let y = 0; y < gameBoard.grid.length; y++) {
            for (let x = 0; x < gameBoard.grid[y].length; x++) {
                const boardSquare = gameBoard.grid[y][x];
                if (boardSquare.isUnder) {
                    if (!piece.validMove(boardSquare)) {
                        piece.x = piece.centerX;
                        piece.y = piece.centerY;
                        this.isHoldingPiece = false;
                        this.pieceInHand = null;
                        piece.boardSquare.containsPiece = piece;
                        piece.isPickedUp = false;
                        piece.boardSquare.hasPiece = true;
                    } else {
                        piece.centerX = boardSquare.x + (squareSize/2);
                        piece.centerY = boardSquare.y + (squareSize/2) ;
                        piece.x = piece.centerX;
                        piece.y = piece.centerY;
                        piece.coordinates = boardSquare.coordinates;
                        piece.boardSquare.containsPiece = null;
                        piece.boardSquare.hasPiece = false;
                        boardSquare.hasPiece = true;
                        boardSquare.containsPiece = piece;
                        piece.boardSquare = boardSquare;
                        this.isHoldingPiece = false;
                        this.pieceInHand = null;
                        piece.isPickedUp = false;} 
                }
            }
        }
    }

    checkForPickup(){
        for (let index = 0; index < gameBoard.pieces.length; index++) {
            var pawn = gameBoard.pieces[index];
            if (pawn.underMouse && player.isHoldingPiece == false) {
                gameBoard.pieces.splice(index, 1);
                gameBoard.pieces.push(pawn);
                player.pickUp(pawn);
                break
            }
        }
    }

    do(){
        if (player.isHoldingPiece)
        player.move();
    }
}