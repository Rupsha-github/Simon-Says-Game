userSeq = [];
gameSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "green", "purple", "red"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("Game has started");
    started = true;

    levelUp();
    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },270);
}

function levelUp()
{
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx)
{
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was ${level}</b>.<br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
    // console.log("Current level :",level);
}
let allBtns = document.querySelectorAll(".btn");

function btnPress() {
    let color = this.getAttribute("id");
    // console.log(`${color} button was selected by user`);
    btnFlash(this);
    userSeq.push(color);
    checkAns(userSeq.length-1);
}
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started = false;
    level = 0;
    gameSeq  = [];
    userSeq = [];
}