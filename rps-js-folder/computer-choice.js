// computer's pick

function getComputerChoice() {
    const gameArr = ["rock", "paper", "scissors"];
    return(gameArr[Math.floor(Math.random() * 3)]);
}
