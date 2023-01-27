const KeyInfo = document.getElementById("KeyInfo")
const Keyinfo2 = document.getElementById("KeyInfo2")
const header = document.getElementById("WelcomeHeader")
const AltInput = document.getElementById("AltInput")
const Submit = document.getElementById("Submit")

document.addEventListener('keydown', (event) =>{
    let Keyname = event.key;
    let KeyCode = event.code;
    let KeyChar = event.which; 
    console.log(`${Keyname} and ${KeyCode} and ${KeyChar}`)
    KeyInfo.style.display="block"
    KeyInfo.innerHTML =`The Key pressed was: <span id="keyCol">${Keyname}</span>, it's code is: <span id="CodeCol">${KeyCode}</span> and it is located at: <span id ="CharCol">${KeyChar}</span>`
}
)

AltInput.addEventListener('keydown', (event2) =>{
    let Keyname2 = event2.key;
    let KeyCode2 = event2.code;
    let KeyChar2 = event2.which;
    console.log(`${Keyname2} and ${KeyCode2} and ${KeyChar2}`)
    
    Keyinfo2.innerHTML = `The Key pressed was: <span id="keyCol2">${Keyname2}</span>, it's code is: <span id="CodeCol2">${KeyCode2}</span> and it is located at: <span id ="CharCol2">${KeyChar2}</span>`
})
Submit.addEventListener('click', () =>{
    Keyinfo2.style.display="block";
})




