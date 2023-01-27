const Drums = document.getElementsByClassName("drum");
const instructions = document.getElementsByClassName("instructions");
const Buttons = document.querySelectorAll(".Button")
// const Sounds = document.querySelectorAll(".Sound")

let Boom = document.getElementById("Boom");
let Clap = document.getElementById("Clap");
let Hihat = document.getElementById("Hihat");
let Kick = document.getElementById("Kick");
let Openhat = document.getElementById("Openhat");
let Ride = document.getElementById("Ride");
let Snare = document.getElementById("Snare");
let Tink = document.getElementById("Tink");
let Tom = document.getElementById("Tom");

// document.addEventListener("keydown", (KeyDown) =>{ Long version for first attempt prior to condensing
// let KeyPress = KeyDown.key
//     if(KeyPress === "a"){
//         console.log("BOOM");
//         Boom.play();
//     } else if (KeyPress === "s"){
//         console.log("CLAP");
//         Clap.play();
//     } else if (KeyPress === "d"){
//         console.log("HIHAT");
//         Hihat.play();
//     } else if (KeyPress === "f"){
//         console.log("KICK");
//         Kick.play();
//     } else if (KeyPress === "g"){
//         console.log("OPENHAT");
//         Openhat.play();
//     } else if (KeyPress === "h"){
//         console.log("RIDE");
//         Ride.play();
//     } else if (KeyPress === "j"){
//         console.log("SNARE");
//         Snare.play();
//     } else if (KeyPress === "k"){
//         console.log("TINK");
//         Tink.play();
//     } else if (KeyPress === "l"){
//         console.log("TOM");
//         Tom.play();
//     } else {
//         console.log("null")
//     }
// })

document.addEventListener("keydown", (KeyDown) =>{
    let KeyPress = KeyDown.key
    console.log(KeyPress)
    let Sounds = document.getElementsByClassName(KeyPress);
    if (Sounds.length == 0){
        console.log("null");
        alert("Please press an assigned key");
    } else {
    console.log(Sounds)
    Sounds[0].play();
    }
})

for(let B = 0; B < Buttons.length; B++){
    Buttons[B].addEventListener("click", () =>{
        let Sounds = document.getElementById(Buttons[B].textContent);
        Sounds.play();
        console.log(Buttons[B].textContent)}
          )
    }
        
    


    

    

                


           
        
