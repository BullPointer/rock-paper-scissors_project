// Play Rounds

function playRound(playerSelection, computerSelection) {

    // your code here!
    if (playerSelection == computerSelection){
        return("It's a draw");
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        return("Yah! Rock beats Scissors");
    }else if(playerSelection=="scissors" && computerSelection=="paper"){
        return("Yah! Scissors beats Paper");
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return("Yah! Paper beats Rock");
    } else if(computerSelection=="rock" && playerSelection=="scissors"){
        return("Oops! Rock beats Scissors");
    }else if(computerSelection=="scissors" && playerSelection=="paper"){
        return("Oops! Scissors beats Paper");
    }else if(computerSelection=="paper" && playerSelection=="rock"){
        return("Oops! Paper beats Rock");
    }else {
        return "Click to Start!";
    }
}
