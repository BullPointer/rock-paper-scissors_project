// Play the game again

function replay() {
    const player_btn = document.querySelectorAll('.play-btn');
    const play_again = document.querySelector('.play-again');
    const computer_score = document.querySelector('.computer-score');
    const player_score = document.querySelector('.player-score');

    play_again.style.display = "block";
    play_again.addEventListener('click', () => {
        player_score.textContent = 0;
        computer_score.textContent = 0;
        player_btn[0].disabled = false;
        player_btn[1].disabled = false;
        player_btn[2].disabled = false;
        play_again.style.display = "none";
    });
}
