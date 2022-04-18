# CardGame-Project
UNO Cardgame created in Node.js for the Full-Stack Web Technologies postgraduate course.
## Files in root:
- Use of webpack to create a bundle so the game can be imported (cardGameUNO.js)
- testing.js is the script used to load cardGameUNO.js and use its functions to implement the game
- packaje.json contains the configuration of the project
- package-lock.json contains versions and project dependencies of packages installed with npm install
- webpack.config.js contains the configuration used for webpack
## Files in /src:
- inde.js contains the API of cardGameUNO.js
- gameState.js contains the state of the game and functions to alter it
- gameInitializer.js contains the card pile initialization, initial shuffle of cards and initial dealing of cards to he players
- card.js is the class for each card which contains its information
- player.js is the class for each player which contains its information and player hand managing
- playCardShenanigans.js contains all the necessary processes to state if a card play is valid and update the game state accordingly
- fisherYatesShuffle.js is the array shuffling method I found recommended at Stackoverflow
## Files in /public:
- only contains cardGameUNO.js as the folder /public is where I stated in webpack.config.js to save the bundle
## Considerations:
- Following the rules of Original UNO (https://www.unorules.com/) there are some considerations. For example you cannot play two cards on the same turn. Besides, some not fundamental rules have been altered as for a lack of more development time (other areas had to be prioritized):
- The "UNO!!" shout is automatically generated when a player has only 1 card in hand
- If the first card is not a numbered card it is shifted to the end of the Draw Pile until the first card is a numbered card, instead of shuffling all the cards again.
- The "play rounds until 500 points" rule has not been implemented. When the game ends you just can execute the game again (I personally have never used the 500 points rule).
- All the other rules of Original UNO have been implemented as they are!



