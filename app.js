let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");

let btns=["red","green","yellow","blue"];

document.addEventListener("keypress", function(){
    if(started==false)
    {
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerHTML=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    gameFlash(randbtn);
}
 
function checkAns()
{
    let idx=level-1;
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }

    else{
        
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
}