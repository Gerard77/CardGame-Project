var e={d:(l,r)=>{for(var s in r)e.o(r,s)&&!e.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:r[s]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)},l={};e.d(l,{Z:()=>a});const r=class{constructor(e,l,r,s){this.id=e,this.name=l,this.color=r,this.number=s}};function s(e){let l,r=e.length;for(;0!=r;)l=Math.floor(Math.random()*r),r--,[e[r],e[l]]=[e[l],e[r]];return e}const a=class{constructor(){this.gameState=new class{constructor(){this.drawPile=new Array,this.discardPile=new Array,this.playerList=new Array,this.gameDirection="normal",this.color="",this.idxPlayerTurn=-1,this.skipFlag=!1}addPlayer(e){let l=new class{constructor(e){this.name=e,this.hand=new Array}addCardToHand(e){this.hand.push(e)}removeCardFromHand(e){this.hand.splice(e,1)}setStartingHand(e){for(let l of e)this.hand.push(l)}}(e);this.playerList.push(l)}startGame(){let e=new class{constructor(){this.allCards=new Array,this.allCards.push(new r(1,"0-red","red",0)),this.allCards.push(new r(1,"1-red","red",1)),this.allCards.push(new r(1,"1-red","red",1)),this.allCards.push(new r(1,"2-red","red",2)),this.allCards.push(new r(1,"2-red","red",2)),this.allCards.push(new r(1,"3-red","red",3)),this.allCards.push(new r(1,"3-red","red",3)),this.allCards.push(new r(1,"4-red","red",4)),this.allCards.push(new r(1,"4-red","red",4)),this.allCards.push(new r(1,"5-red","red",5)),this.allCards.push(new r(1,"5-red","red",5)),this.allCards.push(new r(1,"6-red","red",6)),this.allCards.push(new r(1,"6-red","red",6)),this.allCards.push(new r(1,"7-red","red",7)),this.allCards.push(new r(1,"7-red","red",7)),this.allCards.push(new r(1,"8-red","red",8)),this.allCards.push(new r(1,"8-red","red",8)),this.allCards.push(new r(1,"9-red","red",9)),this.allCards.push(new r(1,"9-red","red",9)),this.allCards.push(new r(1,"0-blue","blue",0)),this.allCards.push(new r(1,"1-blue","blue",1)),this.allCards.push(new r(1,"1-blue","blue",1)),this.allCards.push(new r(1,"2-blue","blue",2)),this.allCards.push(new r(1,"2-blue","blue",2)),this.allCards.push(new r(1,"3-blue","blue",3)),this.allCards.push(new r(1,"3-blue","blue",3)),this.allCards.push(new r(1,"4-blue","blue",4)),this.allCards.push(new r(1,"4-blue","blue",4)),this.allCards.push(new r(1,"5-blue","blue",5)),this.allCards.push(new r(1,"5-blue","blue",5)),this.allCards.push(new r(1,"6-blue","blue",6)),this.allCards.push(new r(1,"6-blue","blue",6)),this.allCards.push(new r(1,"7-blue","blue",7)),this.allCards.push(new r(1,"7-blue","blue",7)),this.allCards.push(new r(1,"8-blue","blue",8)),this.allCards.push(new r(1,"8-blue","blue",8)),this.allCards.push(new r(1,"9-blue","blue",9)),this.allCards.push(new r(1,"9-blue","blue",9)),this.allCards.push(new r(1,"0-green","green",0)),this.allCards.push(new r(1,"1-green","green",1)),this.allCards.push(new r(1,"1-green","green",1)),this.allCards.push(new r(1,"2-green","green",2)),this.allCards.push(new r(1,"2-green","green",2)),this.allCards.push(new r(1,"3-green","green",3)),this.allCards.push(new r(1,"3-green","green",3)),this.allCards.push(new r(1,"4-green","green",4)),this.allCards.push(new r(1,"4-green","green",4)),this.allCards.push(new r(1,"5-green","green",5)),this.allCards.push(new r(1,"5-green","green",5)),this.allCards.push(new r(1,"6-green","green",6)),this.allCards.push(new r(1,"6-green","green",6)),this.allCards.push(new r(1,"7-green","green",7)),this.allCards.push(new r(1,"7-green","green",7)),this.allCards.push(new r(1,"8-green","green",8)),this.allCards.push(new r(1,"8-green","green",8)),this.allCards.push(new r(1,"9-green","green",9)),this.allCards.push(new r(1,"9-green","green",9)),this.allCards.push(new r(1,"0-yellow","yellow",0)),this.allCards.push(new r(1,"1-yellow","yellow",1)),this.allCards.push(new r(1,"1-yellow","yellow",1)),this.allCards.push(new r(1,"2-yellow","yellow",2)),this.allCards.push(new r(1,"2-yellow","yellow",2)),this.allCards.push(new r(1,"3-yellow","yellow",3)),this.allCards.push(new r(1,"3-yellow","yellow",3)),this.allCards.push(new r(1,"4-yellow","yellow",4)),this.allCards.push(new r(1,"4-yellow","yellow",4)),this.allCards.push(new r(1,"5-yellow","yellow",5)),this.allCards.push(new r(1,"5-yellow","yellow",5)),this.allCards.push(new r(1,"6-yellow","yellow",6)),this.allCards.push(new r(1,"6-yellow","yellow",6)),this.allCards.push(new r(1,"7-yellow","yellow",7)),this.allCards.push(new r(1,"7-yellow","yellow",7)),this.allCards.push(new r(1,"8-yellow","yellow",8)),this.allCards.push(new r(1,"8-yellow","yellow",8)),this.allCards.push(new r(1,"9-yellow","yellow",9)),this.allCards.push(new r(1,"9-yellow","yellow",9)),this.allCards.push(new r(2,"Draw 2 red","red",10)),this.allCards.push(new r(2,"Draw 2 red","red",10)),this.allCards.push(new r(2,"Reverse red","red",11)),this.allCards.push(new r(2,"Reverse red","red",11)),this.allCards.push(new r(2,"Skip red","red",12)),this.allCards.push(new r(2,"Skip red","red",12)),this.allCards.push(new r(2,"Draw 2 blue","blue",10)),this.allCards.push(new r(2,"Draw 2 blue","blue",10)),this.allCards.push(new r(2,"Reverse blue","blue",11)),this.allCards.push(new r(2,"Reverse blue","blue",11)),this.allCards.push(new r(2,"Skip blue","blue",12)),this.allCards.push(new r(2,"Skip blue","blue",12)),this.allCards.push(new r(2,"Draw 2 green","green",10)),this.allCards.push(new r(2,"Draw 2 green","green",10)),this.allCards.push(new r(2,"Reverse green","green",11)),this.allCards.push(new r(2,"Reverse green","green",11)),this.allCards.push(new r(2,"Skip green","green",12)),this.allCards.push(new r(2,"Skip green","green",12)),this.allCards.push(new r(2,"Draw 2 yellow","yellow",10)),this.allCards.push(new r(2,"Draw 2 yellow","yellow",10)),this.allCards.push(new r(2,"Reverse yellow","yellow",11)),this.allCards.push(new r(2,"Reverse yellow","yellow",11)),this.allCards.push(new r(2,"Skip yellow","yellow",12)),this.allCards.push(new r(2,"Skip yellow","yellow",12)),this.allCards.push(new r(3,"Change color","nothing",14)),this.allCards.push(new r(3,"Change color","nothing",14)),this.allCards.push(new r(3,"Change color","nothing",14)),this.allCards.push(new r(3,"Change color","nothing",14)),this.allCards.push(new r(3,"Draw 4","nothing",15)),this.allCards.push(new r(3,"Draw 4","nothing",15)),this.allCards.push(new r(3,"Draw 4","nothing",15)),this.allCards.push(new r(3,"Draw 4","nothing",15))}shuffleCards(){this.allCards=s(this.allCards)}getShuffledCards(){for(;1!=this.allCards[this.allCards.length-1].id;){let e=this.allCards.pop();this.allCards.unshift(e)}return this.allCards}getStartingHand(){let e=new Array;for(let l=0;l<7;l++)e.push(this.allCards.pop());return e}};e.shuffleCards();for(let l of this.playerList)l.setStartingHand(e.getStartingHand());this.drawPile=e.getShuffledCards(),this.discardPile.push(this.drawPile.pop()),this.color=this.discardPile[this.discardPile.length-1].color}privateGetNextPlayer(){return"normal"==this.gameDirection?this.idxPlayerTurn+1>this.playerList.length-1?0:this.idxPlayerTurn+1:this.idxPlayerTurn-1<0?this.playerList.length-1:this.idxPlayerTurn-1}getNextPlayer(){return this.idxPlayerTurn=this.privateGetNextPlayer(),this.skipFlag&&(this.idxPlayerTurn=this.privateGetNextPlayer()),this.skipFlag=!1,{playerIdx:this.idxPlayerTurn,name:this.playerList[this.idxPlayerTurn].name}}getCardOnPlay(){let e=this.discardPile[this.discardPile.length-1];return 1==e.id?`${e.number} ${e.color}`:3==e.id?`${e.name} --\x3e color is ${this.color}`:`${e.name}`}getPlayerHand(){let e=this.playerList[this.idxPlayerTurn].hand,l=new Array;for(let r=0;r<e.length;r++){let s=e[r];1==s.id?l.push({name:`${r+1}.- ${s.number} ${s.color}`,id:s.id}):l.push({name:`${r+1}.- ${s.name}`,id:s.id})}return l}reshuffleDeck(){console.log("Reshuffling decks");let e=this.discardPile.pop(),l=[...this.drawPile,...this.discardPile];l=s(l),this.drawPile=[],this.drawPile=l,this.discardPile=[],this.discardPile.push(e)}playerPlaysCard(e){let l=new class{constructor(e,l,r,s,a,t,i,h,n){this.player=e,this.nextPlayer=l,this.drawPile=s,this.discardPile=a,this.gameDirection=r,this.color=t,this.cardIdx=i,this.cardPlayed=e.hand[i],this.cardOnPlay=this.discardPile[this.discardPile.length-1],this.idxPlayerTurn=h,this.idxNextPlayer=n}drawNumberOfCards(e,l,r){console.log(`Player ${r+1} (${e.name}) draws ${l} card/s! Ouch!`);for(let r=0;r<l;r++){let l=this.drawPile.pop();e.addCardToHand(l)}}changeDirection(){return console.log("Change of direction!"),"normal"==this.gameDirection?"reverse":"normal"}compareByNumber(){return this.cardPlayed.number==this.cardOnPlay.number}compareByColor(){return this.cardPlayed.color==this.color}actionsForType2Card(){let e={gameDirection:this.gameDirection,skipFlag:!1};switch(this.cardPlayed.number){case 10:this.drawNumberOfCards(this.nextPlayer,2,this.idxNextPlayer);break;case 11:e.gameDirection=this.changeDirection();break;case 12:e.skipFlag=!0,console.log(`Player ${this.idxNextPlayer+1} (${this.nextPlayer.name}) skips turn`)}return e}printValidCardMessage(){1==this.cardPlayed.id?console.log(`You played card ${this.cardPlayed.number} ${this.cardPlayed.color}`):console.log(`You played card ${this.cardPlayed.name}`)}updateState(){return this.discardPile.push(this.cardPlayed),this.player.removeCardFromHand(this.cardIdx),this.printValidCardMessage(),1==this.player.hand.length&&console.log("UNO!!"),3!=this.cardPlayed.id?this.discardPile[this.discardPile.length-1].color:this.color}computeOutput(){let e={validPlay:!1,gameDirection:this.gameDirection,color:this.color,skipFlag:!1,askChangeOfColor:!1},l=!1,r=!1;switch(-1==this.cardIdx&&(this.drawNumberOfCards(this.player,1,this.idxPlayerTurn),this.cardPlayed=this.player.hand[this.player.hand.length-1],this.cardIdx=this.player.hand.length-1,r=!0),this.cardPlayed.id){case 1:l=this.compareByNumber(),l||(l=this.compareByColor());break;case 2:if(l=this.compareByColor(),l||(l=this.compareByNumber()),l){let l=this.actionsForType2Card();e.gameDirection=l.gameDirection,e.skipFlag=l.skipFlag}break;case 3:l=!0,15==this.cardPlayed.number&&this.drawNumberOfCards(this.nextPlayer,4,this.idxNextPlayer),e.askChangeOfColor=!0;break;default:throw new Error("Impossible card id")}return e.validPlay=l,1==e.validPlay?e.color=this.updateState():r?e.validPlay=!0:console.log("Invalid card play! Try again"),e}}(this.playerList[this.idxPlayerTurn],this.playerList[this.privateGetNextPlayer()],this.gameDirection,this.drawPile,this.discardPile,this.color,e,this.idxPlayerTurn,this.privateGetNextPlayer()),r={validPlay:!1,askChangeOfColor:!1};try{let e=l.computeOutput();e.validPlay&&(this.gameDirection=e.gameDirection,this.color=e.color,r.validPlay=e.validPlay,r.askChangeOfColor=e.askChangeOfColor,e.skipFlag&&(this.skipFlag=!0),this.drawPile.length<4&&this.reshuffleDeck())}catch(e){console.log(e)}return r}setNewColor(e){this.color=e}checkPlayerOutOfCards(){return 0==this.playerList[this.idxPlayerTurn].hand.length}controlInputCardIdx(e){let l=e>=-1&&e<=this.playerList[this.idxPlayerTurn].hand.length-1;return l||console.log("Invalid card index, try again"),l}controlInputColor(e){let l=("red"==e||"green"==e||"blue"==e||"yellow"==e)&&e!=this.color;return l||console.log("Invalid color, remember it must be different than the current color. Try again"),l}controlNumberOfPlayers(e){let l=e>1&&e<11;return l||console.log("Invalid number of players. Try again"),l}}}addPlayer(e){this.gameState.addPlayer(e)}initiateGame(){this.gameState.startGame()}getPlayerHand(e){return this.gameState.getPlayerHand(e)}getNextPlayer(){return this.gameState.getNextPlayer()}getCardOnPlay(){return this.gameState.getCardOnPlay()}playerPlaysCard(e){return this.gameState.playerPlaysCard(e-1)}setNewColor(e){this.gameState.setNewColor(e)}playerOutOfCards(){return this.gameState.checkPlayerOutOfCards()}controlInputCardIdx(e){return this.gameState.controlInputCardIdx(e-1)}controlInputColor(e){return this.gameState.controlInputColor(e)}controlNumberOfPlayers(e){return this.gameState.controlNumberOfPlayers(e)}};var t=l.Z;export{t as default};