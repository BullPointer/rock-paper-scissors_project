
function score() {
    let player_score = document.querySelector('.player-score');
    let computer_score = document.querySelector('.computer-score');
    let msg = document.querySelector('.msg');

    // Add Scores
    if ((msg.textContent == "Yah! Rock beats Scissors")||
        (msg.textContent == "Yah! Scissors beats Paper")||
        (msg.textContent == "Yah! Paper beats Rock")) {
      player_score.textContent = eval(Number(player_score.textContent)+1);
    }
    if ((msg.textContent == "Oops! Rock beats Scissors")||
        (msg.textContent == "Oops! Scissors beats Paper")||
        (msg.textContent == "Oops! Paper beats Rock")) {
        computer_score.textContent= Number(computer_score.textContent)+1;
    }

}