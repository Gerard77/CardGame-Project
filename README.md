# CardGame-Project
UNO Cardgame created in Node.js for the Full-Stack Web Technologies postgraduate course.
- Use of webpack to create a bundle so the game can be imported (cardGameUNO.js)
- The API of the project is index.js
- gameState.js contains the state of the game and functions to alter it
- gameInitializer.js contains the card pile initialization, initial shuffle of cards and initial dealing of cards to he players
- card.js is the class for each card which contains its information
- player.js is the class for each player which contains its information and player hand managing
- playCardShenanigans.js contains all the necessary processes to state if a card play is valid and update the game state accordingly
- fisherYatesShuffle.js is the array shuffling method I found recommended at Stackoverflow
- testing.js is the script used to load cardGameUNO.js and use its functions to implement the game
