import GameInitializer from "./gameInitializer.js";
import Player from "./player.js"
import PlayCardShenanigans from "./playCardShenanigans.js";
import { shuffle } from "./fisherYatesShuffle.js";

class GameState {
    constructor() {
        this.drawPile = new Array();
        this.discardPile = new Array();
        this.playerList = new Array();
        this.gameDirection = "normal";
        this.color = "";
        this.idxPlayerTurn = -1;

        this.skipFlag = false;
    }
    addPlayer(name) {
        let player = new Player(name);
        this.playerList.push(player);
    }
    startGame() {
        let gameInit = new GameInitializer();
        gameInit.shuffleCards();
        for (let player of this.playerList) {
            player.setStartingHand(gameInit.getStartingHand());
        }
        this.drawPile = gameInit.getShuffledCards()
        this.discardPile.push(this.drawPile.pop());
        this.color = this.discardPile[this.discardPile.length - 1].color;
    }
    privateGetNextPlayer() {
        if (this.gameDirection == "normal") {
            if (this.idxPlayerTurn + 1 > this.playerList.length - 1) {
                return 0;
            } else {
                return this.idxPlayerTurn + 1;
            }
        } else {
            if (this.idxPlayerTurn - 1 < 0) {
                return this.playerList.length - 1;
            }
            else {
                return this.idxPlayerTurn - 1;
            }
        }
    }
    getNextPlayer() {
        this.idxPlayerTurn = this.privateGetNextPlayer();
        if (this.skipFlag) this.idxPlayerTurn = this.privateGetNextPlayer(); //if we skip the player we execute the call a 2nd time
        this.skipFlag = false;
        return { playerIdx: this.idxPlayerTurn, name: this.playerList[this.idxPlayerTurn].name };
    }
    getCardOnPlay() {
        let card = this.discardPile[this.discardPile.length - 1];
        if (card.id == 1) {
            return `${card.number} ${card.color}`;
        } else if (card.id == 3) {
            return `${card.name} --> color is ${this.color}`;
        } else {
            return `${card.name}`;
        }
    }
    getPlayerHand() {
        let playerHand = this.playerList[this.idxPlayerTurn].hand;
        let cardsNames = new Array();
        for (let i = 0; i < playerHand.length; i++) {
            let card = playerHand[i];
            if (card.id == 1) {
                cardsNames.push({ name: `${i + 1}.- ${card.number} ${card.color}`, id: card.id });
            } else {
                cardsNames.push({ name: `${i + 1}.- ${card.name}`, id: card.id });
            }
        }
        return cardsNames;
    }
    reshuffleDeck() {
        console.log("Reshuffling decks");
        let topCard = this.discardPile.pop();
        let newDrawPile = [...this.drawPile, ...this.discardPile];
        newDrawPile = shuffle(newDrawPile);
        this.drawPile = [];
        this.drawPile = newDrawPile;
        this.discardPile = [];
        this.discardPile.push(topCard);
    }
    playerPlaysCard(cardIdx) {
        let playCardShenanigans = new PlayCardShenanigans(this.playerList[this.idxPlayerTurn], this.playerList[this.privateGetNextPlayer()],
            this.gameDirection, this.drawPile, this.discardPile, this.color, cardIdx, this.idxPlayerTurn, this.privateGetNextPlayer());
        let result = { validPlay: false, askChangeOfColor: false };
        try {
            let output = playCardShenanigans.computeOutput();
            if (output.validPlay) {
                this.gameDirection = output.gameDirection;
                this.color = output.color;
                result.validPlay = output.validPlay;
                result.askChangeOfColor = output.askChangeOfColor;
                if (output.skipFlag) this.skipFlag = true;
                //easy way to avoid problems if last drawn card is Draw 4:
                if (this.drawPile.length < 4) this.reshuffleDeck();
            }
        } catch (error) {
            console.log(error);
        }
        return result;
    }
    setNewColor(color) {
        this.color = color;
    }
    checkPlayerOutOfCards() {
        return this.playerList[this.idxPlayerTurn].hand.length == 0;
    }
    controlInputCardIdx(cardIdx) {
        let correct = (cardIdx >= -1 && cardIdx <= this.playerList[this.idxPlayerTurn].hand.length - 1) ? true : false;
        if (!correct) console.log("Invalid card index, try again");
        return correct;
    }
    controlInputColor(color) {
        let correct = ((color == "red" || color == "green" || color == "blue" || color == "yellow") && color != this.color) ? true : false;
        if (!correct) console.log("Invalid color, remember it must be different than the current color. Try again");
        return correct;
    }
    controlNumberOfPlayers(number) {
        let correct = (number > 1 && number < 11) ? true : false;
        if (!correct) console.log("Invalid number of players. Try again");
        return correct;
    }
}

export default GameState;