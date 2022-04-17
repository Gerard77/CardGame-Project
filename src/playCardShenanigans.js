class PlayCardShenanigans {
    constructor(player, nextPlayer, gameDirection, drawPile, discardPile, color, cardIdx, idxPlayerTurn, idxNextPlayer) {
        this.player = player;
        this.nextPlayer = nextPlayer;
        this.drawPile = drawPile;
        this.discardPile = discardPile;
        this.gameDirection = gameDirection;
        this.color = color;
        this.cardIdx = cardIdx;
        this.cardPlayed = player.hand[cardIdx];
        this.cardOnPlay = this.discardPile[this.discardPile.length - 1];
        this.idxPlayerTurn = idxPlayerTurn;
        this.idxNextPlayer = idxNextPlayer;
    }
    drawNumberOfCards(player, number, idx) {
        console.log(`Player ${idx + 1} (${player.name}) draws ${number} card/s! Ouch!`);
        for (let i = 0; i < number; i++) {
            let card = this.drawPile.pop();
            player.addCardToHand(card);
        }
    }
    changeDirection() {
        console.log("Change of direction!");
        return this.gameDirection == "normal" ? "reverse" : "normal";
    }
    compareByNumber() {
        return this.cardPlayed.number == this.cardOnPlay.number ? true : false;
    }
    compareByColor() {
        return this.cardPlayed.color == this.color ? true : false;
    }
    actionsForType2Card() {
        let output = { gameDirection: this.gameDirection, skipFlag: false }
        switch (this.cardPlayed.number) {
            case 10:
                this.drawNumberOfCards(this.nextPlayer, 2, this.idxNextPlayer);
                break;
            case 11:
                output.gameDirection = this.changeDirection();
                break;
            case 12:
                output.skipFlag = true;
                console.log(`Player ${this.idxNextPlayer + 1} (${this.nextPlayer.name}) skips turn`);
                break;
        }
        return output;
    }
    printValidCardMessage() {
        this.cardPlayed.id == 1 ? console.log(`You played card ${this.cardPlayed.number} ${this.cardPlayed.color}`) : console.log(`You played card ${this.cardPlayed.name}`);
    }
    //remove card from player AND change color to card color
    updateState() {
        this.discardPile.push(this.cardPlayed);
        this.player.removeCardFromHand(this.cardIdx);
        this.printValidCardMessage();
        if (this.player.hand.length == 1) console.log("UNO!!");
        //in case it's a wild card (id==3) by now we just leave the same color as we wait for the new color from user
        return (this.cardPlayed.id != 3) ? this.discardPile[this.discardPile.length - 1].color : this.color;
    }
    computeOutput() {
        let output = { validPlay: false, gameDirection: this.gameDirection, color: this.color, skipFlag: false, askChangeOfColor: false };
        let validPlay = false;
        let flagDrawOne = false; //in case player draws 1 card, this serves to brake the loop of asking the player a new card in case he cannot play it
        if (this.cardIdx == -1) { //in case player draws 1 card we set the cardPlayed to the new drawn card as stated in the rules
            this.drawNumberOfCards(this.player, 1, this.idxPlayerTurn);
            this.cardPlayed = this.player.hand[this.player.hand.length - 1];
            this.cardIdx = this.player.hand.length - 1;
            flagDrawOne = true;
        }
        switch (this.cardPlayed.id) {
            case 1:
                validPlay = this.compareByNumber();
                if (!validPlay) validPlay = this.compareByColor();
                break;
            case 2:
                validPlay = this.compareByColor();
                //because of how I manage type 2 cards I can also use compareByNumber() to check Action / Symbol equivalence
                if (!validPlay) validPlay = this.compareByNumber();
                if (validPlay) {
                    let type2Output = this.actionsForType2Card();
                    output.gameDirection = type2Output.gameDirection;
                    output.skipFlag = type2Output.skipFlag;
                }
                break;
            case 3:
                validPlay = true;
                if (this.cardPlayed.number == 15) this.drawNumberOfCards(this.nextPlayer, 4, this.idxNextPlayer);
                output.askChangeOfColor = true;
                break;
            default:
                throw new Error("Impossible card id");
                break;
        }
        output.validPlay = validPlay;
        if (output.validPlay == true) {
            output.color = this.updateState();
        } else {
            flagDrawOne ? output.validPlay = true : console.log("Invalid card play! Try again");
        }
        return output;
    }
}

export default PlayCardShenanigans;