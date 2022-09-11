function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getPlayerChoice(){
    let choice = prompt();
    //console.log(choice);
    if(typeof choice === "string")
    {
        choice=choice.trim();
        choice=choice.toLowerCase();
    }
    if (!(choice==="rock" || choice==="paper" || choice==="scissors"))
    {
        console.log("Invalid choice! Try again!");
        choice=getPlayerChoice();
    }
    return choice;
}
function getComputerChoice(){
    let choice = generateRandomIntegerInRange(0,2);
    if(choice===0) choice="rock";
    else if (choice===1) choice="paper";
    else choice="scissors";
    console.log(choice);
    return choice;
}
function gameRound(player,computer){
    if((player==="rock" && computer==="rock") || (player==="paper" && computer==="paper") || (player==="scissors" && computer==="scissors")) return "it's a tie!";
    else if(player==="rock" && computer==="paper") return "you lose! paper beats rock";
    else if(player==="paper" && computer==="rock") return "you win! paper beats rock";
    else if(player==="rock" && computer==="scissors") return "you win! rock beats scissors";
    else if(player==="scissors" && computer==="rock") return "you lose! rock beats scissors";
    else if(player==="paper" && computer==="scissors") return "you lose! scissors beat paper";
    else if(player==="scissors" && computer==="paper") return "you win! scissors beat paper";
}
function game()
{
    let notTieCount=0;
    let winCount=0;
    let loseCount=0;
    while(notTieCount<5)
    {
        let result=gameRound(getPlayerChoice(),getComputerChoice());
        if(result.includes("you win!"))
        {
            notTieCount++;
            winCount++;
        }
        else if(result.includes("you lose!"))
        {
            notTieCount++;
            loseCount++;
        }
    }
    console.log("The game is over");
    console.log(`Player ${winCount}:${loseCount} Computer`);
}
game();
