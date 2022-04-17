import Card from "./card.js";
import { shuffle } from "./fisherYatesShuffle.js";

class GameInitializer {
    constructor() {
        this.allCards = new Array();
        this.allCards.push(new Card(1, "0-red", "red", 0));
        this.allCards.push(new Card(1, "1-red", "red", 1));
        this.allCards.push(new Card(1, "1-red", "red", 1));
        this.allCards.push(new Card(1, "2-red", "red", 2));
        this.allCards.push(new Card(1, "2-red", "red", 2));
        this.allCards.push(new Card(1, "3-red", "red", 3));
        this.allCards.push(new Card(1, "3-red", "red", 3));
        this.allCards.push(new Card(1, "4-red", "red", 4));
        this.allCards.push(new Card(1, "4-red", "red", 4));
        this.allCards.push(new Card(1, "5-red", "red", 5));
        this.allCards.push(new Card(1, "5-red", "red", 5));
        this.allCards.push(new Card(1, "6-red", "red", 6));
        this.allCards.push(new Card(1, "6-red", "red", 6));
        this.allCards.push(new Card(1, "7-red", "red", 7));
        this.allCards.push(new Card(1, "7-red", "red", 7));
        this.allCards.push(new Card(1, "8-red", "red", 8));
        this.allCards.push(new Card(1, "8-red", "red", 8));
        this.allCards.push(new Card(1, "9-red", "red", 9));
        this.allCards.push(new Card(1, "9-red", "red", 9));

        this.allCards.push(new Card(1, "0-blue", "blue", 0));
        this.allCards.push(new Card(1, "1-blue", "blue", 1));
        this.allCards.push(new Card(1, "1-blue", "blue", 1));
        this.allCards.push(new Card(1, "2-blue", "blue", 2));
        this.allCards.push(new Card(1, "2-blue", "blue", 2));
        this.allCards.push(new Card(1, "3-blue", "blue", 3));
        this.allCards.push(new Card(1, "3-blue", "blue", 3));
        this.allCards.push(new Card(1, "4-blue", "blue", 4));
        this.allCards.push(new Card(1, "4-blue", "blue", 4));
        this.allCards.push(new Card(1, "5-blue", "blue", 5));
        this.allCards.push(new Card(1, "5-blue", "blue", 5));
        this.allCards.push(new Card(1, "6-blue", "blue", 6));
        this.allCards.push(new Card(1, "6-blue", "blue", 6));
        this.allCards.push(new Card(1, "7-blue", "blue", 7));
        this.allCards.push(new Card(1, "7-blue", "blue", 7));
        this.allCards.push(new Card(1, "8-blue", "blue", 8));
        this.allCards.push(new Card(1, "8-blue", "blue", 8));
        this.allCards.push(new Card(1, "9-blue", "blue", 9));
        this.allCards.push(new Card(1, "9-blue", "blue", 9));

        this.allCards.push(new Card(1, "0-green", "green", 0));
        this.allCards.push(new Card(1, "1-green", "green", 1));
        this.allCards.push(new Card(1, "1-green", "green", 1));
        this.allCards.push(new Card(1, "2-green", "green", 2));
        this.allCards.push(new Card(1, "2-green", "green", 2));
        this.allCards.push(new Card(1, "3-green", "green", 3));
        this.allCards.push(new Card(1, "3-green", "green", 3));
        this.allCards.push(new Card(1, "4-green", "green", 4));
        this.allCards.push(new Card(1, "4-green", "green", 4));
        this.allCards.push(new Card(1, "5-green", "green", 5));
        this.allCards.push(new Card(1, "5-green", "green", 5));
        this.allCards.push(new Card(1, "6-green", "green", 6));
        this.allCards.push(new Card(1, "6-green", "green", 6));
        this.allCards.push(new Card(1, "7-green", "green", 7));
        this.allCards.push(new Card(1, "7-green", "green", 7));
        this.allCards.push(new Card(1, "8-green", "green", 8));
        this.allCards.push(new Card(1, "8-green", "green", 8));
        this.allCards.push(new Card(1, "9-green", "green", 9));
        this.allCards.push(new Card(1, "9-green", "green", 9));

        this.allCards.push(new Card(1, "0-yellow", "yellow", 0));
        this.allCards.push(new Card(1, "1-yellow", "yellow", 1));
        this.allCards.push(new Card(1, "1-yellow", "yellow", 1));
        this.allCards.push(new Card(1, "2-yellow", "yellow", 2));
        this.allCards.push(new Card(1, "2-yellow", "yellow", 2));
        this.allCards.push(new Card(1, "3-yellow", "yellow", 3));
        this.allCards.push(new Card(1, "3-yellow", "yellow", 3));
        this.allCards.push(new Card(1, "4-yellow", "yellow", 4));
        this.allCards.push(new Card(1, "4-yellow", "yellow", 4));
        this.allCards.push(new Card(1, "5-yellow", "yellow", 5));
        this.allCards.push(new Card(1, "5-yellow", "yellow", 5));
        this.allCards.push(new Card(1, "6-yellow", "yellow", 6));
        this.allCards.push(new Card(1, "6-yellow", "yellow", 6));
        this.allCards.push(new Card(1, "7-yellow", "yellow", 7));
        this.allCards.push(new Card(1, "7-yellow", "yellow", 7));
        this.allCards.push(new Card(1, "8-yellow", "yellow", 8));
        this.allCards.push(new Card(1, "8-yellow", "yellow", 8));
        this.allCards.push(new Card(1, "9-yellow", "yellow", 9));
        this.allCards.push(new Card(1, "9-yellow", "yellow", 9));

        this.allCards.push(new Card(2, "Draw 2 red", "red", 10));
        this.allCards.push(new Card(2, "Draw 2 red", "red", 10));
        this.allCards.push(new Card(2, "Reverse red", "red", 11));
        this.allCards.push(new Card(2, "Reverse red", "red", 11));
        this.allCards.push(new Card(2, "Skip red", "red", 12));
        this.allCards.push(new Card(2, "Skip red", "red", 12));

        this.allCards.push(new Card(2, "Draw 2 blue", "blue", 10));
        this.allCards.push(new Card(2, "Draw 2 blue", "blue", 10));
        this.allCards.push(new Card(2, "Reverse blue", "blue", 11));
        this.allCards.push(new Card(2, "Reverse blue", "blue", 11));
        this.allCards.push(new Card(2, "Skip blue", "blue", 12));
        this.allCards.push(new Card(2, "Skip blue", "blue", 12));

        this.allCards.push(new Card(2, "Draw 2 green", "green", 10));
        this.allCards.push(new Card(2, "Draw 2 green", "green", 10));
        this.allCards.push(new Card(2, "Reverse green", "green", 11));
        this.allCards.push(new Card(2, "Reverse green", "green", 11));
        this.allCards.push(new Card(2, "Skip green", "green", 12));
        this.allCards.push(new Card(2, "Skip green", "green", 12));

        this.allCards.push(new Card(2, "Draw 2 yellow", "yellow", 10));
        this.allCards.push(new Card(2, "Draw 2 yellow", "yellow", 10));
        this.allCards.push(new Card(2, "Reverse yellow", "yellow", 11));
        this.allCards.push(new Card(2, "Reverse yellow", "yellow", 11));
        this.allCards.push(new Card(2, "Skip yellow", "yellow", 12));
        this.allCards.push(new Card(2, "Skip yellow", "yellow", 12));

        this.allCards.push(new Card(3, "Change color", "nothing", 14));
        this.allCards.push(new Card(3, "Change color", "nothing", 14));
        this.allCards.push(new Card(3, "Change color", "nothing", 14));
        this.allCards.push(new Card(3, "Change color", "nothing", 14));
        this.allCards.push(new Card(3, "Draw 4", "nothing", 15));
        this.allCards.push(new Card(3, "Draw 4", "nothing", 15));
        this.allCards.push(new Card(3, "Draw 4", "nothing", 15));
        this.allCards.push(new Card(3, "Draw 4", "nothing", 15));
    }
    shuffleCards() {
        this.allCards = shuffle(this.allCards);
    }
    getShuffledCards() {
        //if the first draw card of the game is a special card we put it in the end
        //of the stack until the first card is a normal card (we don't want to start the game with a special card)
        while (this.allCards[this.allCards.length - 1].id != 1) {
            let lastCard = this.allCards.pop();
            this.allCards.unshift(lastCard);
        }
        return this.allCards;
    }
    getStartingHand() {
        let startingHand = new Array();
        for (let i = 0; i < 7; i++) {
            startingHand.push(this.allCards.pop());
        }
        return startingHand;
    }
}

export default GameInitializer;