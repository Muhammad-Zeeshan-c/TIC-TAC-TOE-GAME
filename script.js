let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-btn");
let newGameBtn=document.querySelector("#Newg-btn");

let player1ScoreDisplay = document.querySelector("#player1-scorecount");
let player2ScoreDisplay = document.querySelector("#player2-scorecount");
let tieScoreDisplay=document.querySelector("#Tie-scorecount");

let winner=document.querySelector('#display-winner');
let winnerMsg=document.querySelector("#winner-msg")


let player1Score = 0;
let player2Score = 0;
let tieScore=0;


let turnO=false;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

function areAllBoxesFilled() {
        return [...boxes].every(box => box.innerText !== "");
    }

//check winner on each click
function checkWinner(){
    let winflag=false;

    for (let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if (val1 ===val2  && val2===val3){
                if (val1==='O'){
                    player1Score++;
                    player1ScoreDisplay.innerText = player1Score;
                    boxes.forEach((box) => box.disabled = true);
                    winner.style.display="flex";
                    winnerMsg.innerText="Player 1 (O) Wins!! \n Congratulations "
                    

                }
                else if (val2==='X'){
                    player2Score++;
                    player2ScoreDisplay.innerText = player2Score;
                    boxes.forEach((box) => box.disabled = true);
                    winner.style.display="flex";
                    winnerMsg.innerText="Player 2 (X) Wins!! \n Congratulations "
        
                }
                winflag=true;
            }
        }

    }
    

    if (!winflag && areAllBoxesFilled()){
        tieScore++;
        tieScoreDisplay.innerText=tieScore;
        winner.style.display="flex";
        winnerMsg.innerText="It's a Tie"
    }

}

// finding turn of user
function CLICKED(box){
    if (turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
}

function clearAllBoxes(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>CLICKED(box));
});

newGameBtn.addEventListener("click" ,()=>{
    clearAllBoxes();
    
});

resetBtn.addEventListener("click", ()=>{
    clearAllBoxes();
    player1Score=0;
    player2Score=0;
    tieScore=0;
    player1ScoreDisplay.innerText=player1Score;
    player2ScoreDisplay.innerText=player2Score;
    tieScoreDisplay.innerText=tieScore;
    
})

winner.addEventListener("click",()=>{
    winner.style.display="none";
    clearAllBoxes();
})