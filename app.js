let pscore=0;
let cscore =0;
let maxScore=5;
let playAgainButton;

let csym = document.querySelector('.cscore .sym');
let psym = document.querySelector('.pscore .sym');
let rPara = document.querySelector('#result')

function getComputerchoice() {

    const randomNum = Math.floor(Math.random() * 3);
  if (pscore < maxScore && cscore < maxScore) {
    if (randomNum === 0) {
      csym.textContent = "✊";
      return "rock";
    } else if (randomNum === 1) {
      csym.textContent = "✋";
      return "paper";
    } else {
      csym.textContent = "✌️";
      return "scissors";
    }
  }
}


function updateScore(){
    document.querySelector('.pscore .uscore').textContent=pscore;
    document.querySelector('.cscore .uscore').textContent=cscore;
  }


  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        rPara.textContent = 'It\'s a tie';
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        pscore++;
        rPara.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        cscore++;
        rPara.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    updateScore();
    checkWinner();
}


  function checkWinner(){
    if(pscore===maxScore){
        rPara.textContent=`You win!`;
       PlayAgain();

    }
    if(cscore===maxScore){
        rPara.textContent=`You lost!`;
        PlayAgain();
    }
  }

  function resetGame(){
    pscore=0;
    cscore=0;
    rPara.textContent='';
    csym.textContent='❔';
    psym.textContent='❔';
    updateScore();
    playAgainButton.remove();

  }




  function PlayAgain() {
    playAgainButton = document.createElement("button");
    playAgainButton.id='PAbtn';
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener("click", function () {
        resetGame();
        
    });
    document.querySelector(".mainbody").appendChild(playAgainButton);
}





let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener('click',() =>{
    if (pscore < maxScore && cscore < maxScore) {
    const computerselection=getComputerchoice();
   psym.textContent = "✊";

    getPlayerChoice('rock',computerselection);
}
}
)

paper.addEventListener('click',() =>{
    if (pscore < maxScore && cscore < maxScore) {
    const computerselection=getComputerchoice();
    psym.textContent = "✋";
    getPlayerChoice('paper',computerselection);
}
})

scissors.addEventListener('click',() =>{
    if (pscore < maxScore && cscore < maxScore) {
    const computerselection=getComputerchoice();
    psym.textContent = "✌️";
    getPlayerChoice('scissors',computerselection);
}
})


function getPlayerChoice(playerSelection, computerSelection) {
    if (pscore < maxScore && cscore < maxScore) {
        playRound(playerSelection, computerSelection);
    }
}


