let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencomputerchoice=()=>{
    let options=["rock","paper","scissor"];
   const randidx=Math.floor(Math.random()*3);
   return options[randidx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw";
    msg.style.backgroundColor="orange";
}
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        console.log("you lose");
        compscorepara.innerText=compscore;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compchoice=gencomputerchoice();
    console.log("computer choice",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        } else if(userchoice==="paper"){
                userwin=compchoice==="scissors" ?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});