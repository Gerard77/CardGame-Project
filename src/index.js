import GameState from "./gameState.js";

class Cardgame{
    constructor(){
        this.gameState = new GameState();
    }
    addPlayer(name){
        this.gameState.addPlayer(name);
    }
    initiateGame(){
        this.gameState.startGame();
    }
    getPlayerHand(playerIdx){
        return this.gameState.getPlayerHand(playerIdx);
    }
    getNextPlayer(){
        return this.gameState.getNextPlayer();
    }
    getCardOnPlay(){
        return this.gameState.getCardOnPlay();
    }
    playerPlaysCard(cardIdx){
        return this.gameState.playerPlaysCard(cardIdx-1);
    }
    setNewColor(color){
        this.gameState.setNewColor(color);
    }
    playerOutOfCards(){
        return this.gameState.checkPlayerOutOfCards();
    }
    controlInputCardIdx(cardIdx){
        return this.gameState.controlInputCardIdx(cardIdx-1);
    }
    controlInputColor(color){
        return this.gameState.controlInputColor(color);
    }
    controlNumberOfPlayers(number){
        return this.gameState.controlNumberOfPlayers(number);
    }
}
export default Cardgame;