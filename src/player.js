import Card from "./card.js";

class Player{
    constructor(name){
        this.name = name;
        this.hand = new Array();
    }
    addCardToHand(card){
        this.hand.push(card)
    }
    removeCardFromHand(index){
        this.hand.splice(index,1);
    }
    setStartingHand(cardsArray){
        for (let card of cardsArray) {
            this.hand.push(card)
        }
    }
}

export default Player;