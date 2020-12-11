/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a dice as many times as they wish.
- Each result gets added to their ROUND score.
- If the player rolls a 1, all their ROUND score gets lost; after that, it's the next player's turn.
- The player can choose to 'Hold', which means that their ROUND score gets added to their GLOBAL score; after that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game!
- ALSO IN THIS EDITION: Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.

*/

//Globla variables
var scores, roundScore, activePlayer, previousPlayer, gamePlaying;

//init() starts the game!
init();

//Adding eventListener for the 'Roll Dice' button
document.querySelector('.btn-roll').addEventListener('click', function () {
    //First Check if there is a current ongoing game, else do nothing!
    if (gamePlaying) {
        // 1. Generate a random number between 1 and 6
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Reset the previous player status
        document.getElementById('name-' + previousPlayer).textContent = 'Player ' + (previousPlayer + 1);
        document.querySelector('.player-' + previousPlayer + '-panel').classList.remove('toggle');
        document.getElementById('box-' + previousPlayer).classList.remove('fade-out');
        document.getElementById('dice-1').classList.remove('fade-out');

        // 3. Display the result based on the random value generated
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        // 4. IF the rolled number was NOT a 1, update the roundScore 
        if (dice !== 1) {
            //Add score to roundScore
            roundScore += dice;
            //Display the roundScore
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else { //Else it's next player's turn
            nextPlayer();
            //Show the display, just for this special case, as dice has been 1!
            document.querySelector('.dice').style.display = 'block';
            //Mention that the current score is gone due to dice 1!
            document.getElementById('name-' + previousPlayer).textContent = 'Dice 1!';
            document.querySelector('.player-' + previousPlayer + '-panel').classList.add('toggle');
            document.getElementById('box-' + previousPlayer).classList.add('fade-out');
            document.getElementById('dice-1').classList.add('fade-out');
        }
    }
});

//Adding eventListener for the 'Hold' button
document.querySelector('.btn-hold').addEventListener('click', function () {
    //First Check if there is a current ongoing game, else do nothing!
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // If input is ndefined, 0, null or "", those would be COERCED to false, anything else is COERCED to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else { //Next player
            nextPlayer();
        }
    }
});

//Giving the turn to the next player
function nextPlayer() {
    //Save previosly playing player
    previousPlayer = activePlayer;
    //Toggle next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //Reset the roundScore
    roundScore = 0;
    //Clear up the displayed current scores
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Toggling the 'active' class for the player panels
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //Removing the display for dice; getting ready to start fresh with the toggled player
    document.querySelector('.dice').style.display = 'none';
}

//Start the game by clicking on 'New Game'
document.querySelector('.btn-new').addEventListener('click', init);

//Initialization
function init() {
    //Scores of both players; player 0 and player 1
    scores = [0, 0];
    activePlayer = 0;
    previousPlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}