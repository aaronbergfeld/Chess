class Player{
    isHoldingPeice = false;
    peiceInHand = null;

    pickUp(peice){
        this.isHoldingPeice = true;
        this.peiceInHand = peice;
        peice.isPickedUp = true;
    }

    move(peice){
        this.peiceInHand.x = mouseX;
        this.peiceInHand.y = mouseY;
    }

    drop(peice){
        this.isHoldingPeice = false;
        this.peiceInHand = null;
        peice.isPickedUp = false;
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

    action(){
    }
}