let playerScore = 0;
let computerScore = 0;

//Have the computer randomly choose rock, paper, scissors
function computerPlay() {
    //initilaize choice
    let choice;

    //generate random int between [0,3)
    let num = Math.floor(Math.random()*3);
    if(num===0){
        choice = 'Rock';
    } else if(num===1){
        choice = 'Paper';
    } else{
        choice = 'Scissors';
    }
    return choice;
}

function updateScore(){
    const player = document.querySelector('#player-score');
    const computer = document.querySelector('#computer-score');
    player.textContent = '';
    computer.textContent = '';
    player.appendChild(document.createTextNode(playerScore));
    computer.appendChild(document.createTextNode(computerScore));

    let winner = document.querySelector('#winner');
    if(playerScore==5){
        winner.appendChild(document.createTextNode('You win!'));
    } else if(computerScore==5){
        winner.appendChild(document.createTextNode('Computer wins!'));
    }
}

function playRound(playerSelection, computerSelection){
    //convert both choices to all lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //initialize final message
    let msg;
    //nested if-else loops for all possible options
    if(playerSelection===computerSelection){
        msg = "It's a tie!"
    }else if(playerSelection==='rock'){
        if(computerSelection==='paper'){
            msg = "You lose.";
            computerScore++;
        }else{
            msg = "You win.";
            playerScore++;
        }   
    }else if(playerSelection==='paper'){
        if(computerSelection==='rock'){
            msg = "You win.";
            playerScore++;
        }else{
            msg = "You lose.";
            computerScore++;
        }
    }else{
        if(computerSelection==='rock'){
            msg = "You lose.";
            computerScore++;
        }else{
            msg = "You win.";
            playerScore++;
        }
    }
    updateScore(); 
    return msg;
}

//Create a node list of all the rock, paper, scissors buttons
const buttons = document.querySelectorAll('.button');

//Create an event listener for each button that calls on
//the playRound function
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = document.querySelector('div#results');
        result.textContent = '';
        let choice = button.getAttribute('id');
        let msg = playRound(choice, computerPlay());
        result.appendChild(document.createTextNode(msg));
    })
})