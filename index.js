// Rock Paper Scissors Project

//users pick
const getPlayerChoice = () => {
    const playerInput = prompt("There are five rounds. Input Rock, Paper, Scissors?").toLowerCase();
    if(playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
        return playerInput;
    } else {
        return "Wrong Input from player, reload page and try again!"
    }
}

// computer's pick
 function getComputerChoice() {
    const gameArr = ["rock", "paper", "scissors"];
    return(gameArr[Math.floor(Math.random() * 3)]);
}



function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == computerSelection){
        return("It's a draw");
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        return("You Win! Rock beats Scissors");
    }else if(playerSelection=="scissors" && computerSelection=="paper"){
        return("You Win! Scissors beats Paper");
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return("You Win! Paper beats Rock");
    } else if(computerSelection=="rock" && playerSelection=="scissors"){
        return("You Lose! Rock beats Scissors");
    }else if(computerSelection=="scissors" && playerSelection=="paper"){
        return("You Lose! Scissors beats Paper");
    }else if(computerSelection=="paper" && playerSelection=="rock"){
        return("You Lose! Paper beats Rock");
    }else {
        return("Try again!");
    }
}

function game() {
    let player_score = 0;
    let computer_score = 0;
    let drawn_points = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const playRoundValue = playRound(playerSelection,computerSelection);
        if (playRoundValue == "It's a draw") {
            drawn_points+=1;
        } else if (
            (playRoundValue == "You Win! Rock beats Scissors")||
            (playRoundValue == "You Win! Scissors beats Paper")||
            (playRoundValue == "You Win! Paper beats Rock")
        ) {
            player_score+=1;
        } else {
            computer_score+=1;
        }
        console.log(playRoundValue);
    }
    if (player_score > computer_score && player_score > drawn_points){
        console.log("Player Wins");
    } else if ((computer_score > player_score && computer_score > drawn_points)) {
        console.log("Computer Wins");
    } else {
        console.log("Result: It's a Draw");
    }
}
// game();
