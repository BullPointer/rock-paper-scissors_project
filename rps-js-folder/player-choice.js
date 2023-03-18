// User interface implementation

const getPlayerChoice = () => {

    const player_btn = document.querySelectorAll('.play-btn');
    let player_score = document.querySelector('.player-score');
    let computer_score = document.querySelector('.computer-score');
    player_btn.forEach((btn) => {
        btn.addEventListener('click', (player) => {
            let computerSelection = getComputerChoice();
            let playerInput = player.target.textContent.toLowerCase();
            let playRoundValue = playRound(playerInput, computerSelection) ;
            let msg = document.querySelector(".msg");
            msg.textContent = playRoundValue;
            score(playRoundValue);
            winner(player_score, computer_score, player_btn);
        });
    })

}

