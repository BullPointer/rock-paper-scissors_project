// computer's pick

function getComputerChoice() {
    const gameArr = ["rock", "paper", "scissors"];
    for (let index = 0; index < 300; index++) {
        const compSelect = gameArr[Math.floor(Math.random() * 3)];
        return(compSelect);
    }

}
