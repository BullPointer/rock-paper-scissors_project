// Check the Winner

function winner(player_score, computer_score, player_btn) {
    const info_msg = document.querySelector('.info-msg');
    const msg = document.querySelector('.msg');
    if (Number(player_score.textContent) == 3) {
        player_btn[0].disabled = true;
        player_btn[1].disabled = true;
        player_btn[2].disabled = true;
        setTimeout(() => {
            info_msg.textContent = "Congratulations!!!";
            msg.textContent = "Player Wins";
        }, 3000);
    }; 
    if (Number(computer_score.textContent) == 3) {
        player_btn[0].disabled = true;
        player_btn[1].disabled = true;
        player_btn[2].disabled = true;
        setTimeout(() => {
            info_msg.textContent = "Better luck next time...";
            msg.textContent = "Computer Wins";
        }, 3000);
    };
}