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
## Files in /node_modules:
- contains installed packages in the project using npm install



