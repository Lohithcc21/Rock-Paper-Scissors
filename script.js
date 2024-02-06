let userScore = 0;
let compScore = 0;    //1

const choices = document.querySelectorAll(".choice");    //2
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    //rock, paper, scissor
    const options = ["rock", "paper", "scissors"];    ///5 to chech computer choice
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

 const drawGame = () => {                         //6 method
     msg.innerText = "Game was Draw, Play again";
     msg.style.backgroundColor = "#081b31";
 }

 const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin) {
        userScore++;               //to increase the score  10
        userScorePara.innerText = userScore;                  ////9
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;   
        msg.style.backgroundColor = "Green";        ////8 method 
    } else {
        compScore++;           /// to increse the computer score  10
        compScorePara.innerText= compScore;     ////9                
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
 }

const playgame = (userChoice) => {         // check who will win 4
    // to check computer choice
    const compChoice = genCompChoice();           //5 call 
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        //Draw Game                             // 6 to game draw 
        drawGame();                         //6 method call
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;        //to check possibility  of win or lose 7
        } else if(userChoice === "paper") {
                //rock, scissor
                userWin = compChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);      //passing hte value  8 call method
    }
}

choices.forEach((choice) => {                            //3
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
      playgame(userChoice);                         //4 call
    });
});