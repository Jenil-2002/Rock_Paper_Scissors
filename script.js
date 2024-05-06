let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const userscorefinal = document.querySelector("#user-score");
const compscorefinal = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const drawgame = () => {
    console.log("game draw");
    msg.innerText = "GAME DRAW";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorefinal.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorefinal.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        } else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};