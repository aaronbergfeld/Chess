class Player{
    isHoldingPeice = false;
    peiceInHand = null;

    pickUp(peice){
        while (mouseIsPressed) {
            this.isHoldingPeice = true;
            this.peiceInHand = peice;
            peice.isPickedUp = true;
        }
            this.isHoldingPeice = false;
            this.peiceInHand = null;
            peice.isPickedUp = false;
    }


    checkIfHolding(){
        for (let index = 0; index < whitePawns.length; index++) {
        const pawn = whitePawns[index];
            if (!this.isHoldingPeice && (mouseX > pawn.x - pawn.size/2) && (mouseX < pawn.x + pawn.size/2) && (mouseY > pawn.y - pawn.size/2) && (mouseY < pawn.y + pawn.size/2)) {
                this.pickUp(pawn);         
            } else if (this.isHoldingPeice) {
                this.peiceInHand.isPickedUp = false;
                this.isHoldingPeice = false;
                console.log("test")
            }
        }
    }

    do(){
        
    }
}