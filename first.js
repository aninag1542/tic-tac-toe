let moz=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-cointainer");
let msg =document.querySelector("#msg");

let turn0=true; 

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6], 
    [3,4,5],
    [6,7,8],   
];

const resetGame =() =>{
    turn0=true;
    enableBoxes(); 
    msgContainer.classList.add("hide");
}

moz.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0) {
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;;
        }
        box.disabled = true;

        checkwinner();
    });
});

const enableBoxes =() =>{
    for(let box of moz){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes =() =>{
    for(let box of moz){
        box.disabled=true;
    }
}

const showWinner=(Winner)=>{
    msg.innerText= `Bitch YOU WON!🤩 ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner= () =>{
    for(pattern of winpattern){
        let pos1Val = moz[pattern[0]].innerText;
        let pos2Val = moz[pattern[1]].innerText;
        let pos3Val = moz[pattern[2]].innerText;
        
        if(pos1Val != ""&& pos2Val!=""&&pos3Val !=""){
            if(pos1Val === pos2Val&& pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);