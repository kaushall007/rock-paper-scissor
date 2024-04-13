//dom elements

let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//functions
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord (letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

//function for wining 
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user="user".fontsize(3).sub();
    const comp="comp".fontsize(3).sub();
    const userChoice_div =  document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${user} beats ${convertToWord(computerChoice)}${comp}. You Win! 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(()=>userChoice_div.classList.remove("green-glow"),300)
}
//function for losing 
    function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user="user".fontsize(3).sub();
    const comp="comp".fontsize(3).sub();
    const userChoice_div =  document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${user} loses to ${convertToWord(computerChoice)}${comp}. You Lost! 👎 `;
    userChoice_div.classList.add("red-glow");
    setTimeout(()=>userChoice_div.classList.remove("red-glow"),300)
}

//function for draw 
function draw(userChoice,computerChoice){
    const user = "user".fontsize(3).sub();
    const comp = "comp".fontsize(3).sub();
    const userChoice_div =  document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${user} tie ${convertToWord(computerChoice)}${comp}. It's Draw! `;
    userChoice_div.classList.add("grey-glow");
    setTimeout(()=>userChoice_div.classList.remove("grey-glow"),300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;
        case "ps":
        case "sr":
        case "rp":
        lose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        break;
    }


}

function main(){
    rock_div.addEventListener('click', ()=>game("r")); 
    paper_div.addEventListener('click', ()=>game("p"))
    scissors_div.addEventListener('click',()=>game("s"));
}
main();



