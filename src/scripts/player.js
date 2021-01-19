class Player{
    isHoldingPeice = false;
    peiceInHand = null;

    pickUp(peice){
        this.isHoldingPeice = true;
        this.peiceInHand = peice;
        peice.isPickedUp = true;
        peice.boardSquare.hasPeice = false;
    }

    move(peice){
        this.peiceInHand.x = mouseX;
        this.peiceInHand.y = mouseY;
    }

    drop(peice){
        for (let y = 0; y < gameBoard.grid.length; y++) {
            for (let x = 0; x < gameBoard.grid[y].length; x++) {
                const boardSquare = gameBoard.grid[y][x];
                if (boardSquare.isUnder) {
                    if (boardSquare.hasPeice) {
                        peice.x = peice.centerX;
                        peice.y = peice.centerY;
                        this.isHoldingPeice = false;
                        this.peiceInHand = null;
                        peice.isPickedUp = false;
                    } else {
                        peice.x = boardSquare.x + (squareSize / 2);
                        peice.y = boardSquare.y + (squareSize / 2);
                        peice.coordinates = boardSquare.coordinates;
                        boardSquare.hasPeice = true;
                        peice.boardSquare = boardSquare;
                        this.isHoldingPeice = false;
                        this.peiceInHand = null;
                        peice.isPickedUp = false;} 
                }
            }
        }
    }

    checkForPickup(){
        for (let index = 0; index < whitePawns.length; index++) {
            var pawn = whitePawns[index];
          if (pawn.underMouse && player.isHoldingPeice == false) {
              whitePawns.splice(index, 1);
              whitePawns.push(pawn);
              player.pickUp(pawn);
              console.log(player.peiceInHand, player.isHoldingPeice);
              break
      
          }
          else if (player.isHoldingPeice && player.peiceInHand == pawn) {
            player.drop(player.peiceInHand);
          }
        }
    }

    do(){
        if (player.isHoldingPeice)
        player.move();
    }
}