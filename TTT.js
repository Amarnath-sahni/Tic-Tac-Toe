let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let winner=document.querySelector('#winner');
let msgContainer=document.querySelector('.massage-container');
let newGame=document.querySelector('.new-btn');
let reset=document.querySelector('#resetBtn');

let turn0=true;

const WinPattens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//re staert and new game start button
const reStartGeme=()=>{
    turn0=true;
    enableBtton();
    msgContainer.classList.add('hide');
}
//enable function
const enableBtton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
//disable button
const DisableBtton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//show winner function
const showWinner=(S)=>{
    winner.innerText=`Congratulations, winner is ${S}`;
    msgContainer.classList.remove('hide');
    DisableBtton();
}


boxes.forEach((box)=>{
box.addEventListener('click',()=>{
    console.warn("box was click");
   
    if(turn0){//player x
        box.innerText='x';
        turn0=false;
    }else{//player 0
        box.innerText="o";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
})
});

const checkWinner=()=>{
    for(let pattern of WinPattens){
       let box1value=boxes[pattern[0]].innerText;
       let box2value=boxes[pattern[1]].innerText;
       let box3value=boxes[pattern[2]].innerText;
    if(box1value!="" && box2value!="" && box3value!=""){
        if(box1value===box2value && box2value==box3value){
            console.log("Winner",box1value);
            showWinner(box1value);
   
        }
    }
    }
}
newGame.addEventListener('click',reStartGeme);
reset.addEventListener('click',reStartGeme);
