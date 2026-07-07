
// score is zero
let userscore=0;
let compscore=0;       

// access scoreboard id's
const UserScorepara= document.querySelector("#user-score")
const CompScorepara= document.querySelector("#comp-score")


const choices= document.querySelectorAll(".choice");


const msg=document.querySelector("#msg")

// generate computer choice
const gencompChoice= ()=>{
    const option=["Rock","paper","scissor"]
    const randInd=Math.floor(Math.random()*3)
    return option[randInd]    
}

 
// for draw 
const draw=()=>{
    
    msg.innerText="Game is draw.Play again"
    msg.style.backgroundColor="#081b31" 
}


// show who is winner 
const ShowWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++
        UserScorepara.innerText=userscore;
        
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green" 
    }
    else{
        compscore++;
        CompScorepara.innerText=compscore
        msg.innerText=`You Won! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red" 
         
    }
}
const PlayGame=(userChoice)=>{
    console.log("userChoice=",userChoice)
    const compChoice=gencompChoice();
    console.log("compChoice=",compChoice)


    if (userChoice===compChoice){    // draw
        draw()
        
    } else{
        let userWin = true;
        if (userChoice === "Rock"){
            // scissor,paper
            userWin= compChoice==="paper" ? false : true;
        } else if (userChoice==="paper"){
            // scissor,rock
            userWin=compChoice==="scissor" ? false : true;
        } else {
            userWin= compChoice==="Rock" ? false :true
        }

        ShowWinner(userWin,userChoice,compChoice)

    }
    
    

}
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        PlayGame(userChoice)
        
    })
})