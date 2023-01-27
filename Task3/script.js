const Rollem = document.getElementById("Rollem") //rollem = dice roll button
const showScore = document.getElementById("showScore") //displayScore = text to display score
const Dice = document.getElementsByClassName("Dice")[0] //hopefully an array of all the dice images by class name
const Reset = document.getElementById("Reset")
const WinLose = document.getElementById("WinLose")
let Total = 0


Rollem.addEventListener("click",() =>{
 Dice.style.display = "block"
    let DiceRoll = Math.ceil(Math.random()*6);
    Dice.src = `./Images/Dice${DiceRoll}.jpg`
   
    if(DiceRoll == 1){
            WinLose.innerText = "You Lose";
            WinLose.style.color = "Red";
            showScore.innerText = "0";
            showScore.style.fontSize = "50px"
            Rollem.style.display = "none";
            Reset.style.display = "block"
        } else {
            showScore.innerHTML = Total += DiceRoll;
            showScore.style.fontSize = "50px"
            if (Total > 20){
                WinLose.innerText = "You Win!!!";
                WinLose.style.color = "Green";     
                Rollem.style.display = "none";
                Reset.style.display = "block"
                }
            }
            })

Reset.addEventListener("click",() =>{
    Dice.style.display = "none";
    Rollem.style.display = "block";
    showScore.innerText = "";
    WinLose.innerText = "";
    Reset.style.display = "none";
    Total = 0 
}
)