import Cardgame from "./public/cardGameUNO.js";
import Readline from "node:readline";

const readline = Readline;

function askQuestion(query) {
    //Found at: https://stackoverflow.com/questions/18193953/waiting-for-user-to-enter-input-in-node-js
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const gameModule = new Cardgame;

console.log("----Welcome to UNO by Gerard Masip----");
let numPlayers = 0;
do {
    numPlayers = await askQuestion("How many players are you today? (2 to 10): ");
} while (!gameModule.controlNumberOfPlayers(numPlayers));
for (let i = 1; i <= numPlayers; i++) {
    let ans = await askQuestion(`Player ${i}, what is your name? `);
    gameModule.addPlayer(ans);
}
console.log("Alright! Let's start!");
gameModule.initiateGame();
let cardIdx = 0;
let player = {};
do {
    player = gameModule.getNextPlayer();
    console.log(`\nPlayer ${player.playerIdx + 1} (${player.name}) it's your turn.`);
    let ans = await askQuestion("Press Enter when you are ready!");
    console.log(`\nThe card on play is: ${gameModule.getCardOnPlay()}`);
    console.log(`These are your cards: \n`);
    let playerHand = gameModule.getPlayerHand(player.playerIdx);
    for (let cardName of playerHand) {
        console.log(cardName.name);
    }
    console.log("");
    let result = {};
    do {
        do {
            cardIdx = await askQuestion("What card do you want to play? (Use 0 to draw): ");
        } while (!gameModule.controlInputCardIdx(cardIdx));
        result = gameModule.playerPlaysCard(cardIdx)
        if (result.askChangeOfColor) {
            let newColor = "";
            do {
                newColor = await askQuestion("What new color do you want? (red, green, blue, yellow): ");
            } while (!gameModule.controlInputColor(newColor));
            gameModule.setNewColor(newColor);
        }
    } while (!result.validPlay);
} while (!gameModule.playerOutOfCards());

console.log(`Congratulations Player ${player.playerIdx + 1} (${player.name}), YOU WIN!!`);