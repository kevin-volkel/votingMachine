"use strict";

body.addEventListener("contextmenu", function(){
    alert("Choose carefully")
})
body.addEventListener("keypress", operationNixon)

// Changing Colors
nixon.addEventListener("click", correctChoice)
nixon.addEventListener("mouseover", turnGreen)
nixon.addEventListener("mouseout", turnWhite)

let elemList = document.getElementsByClassName("wrong");
for(let i = 0; i < elemList.length; i++){
    elemList[i].addEventListener("mouseover", turnRed)
    elemList[i].addEventListener("mouseout", turnWhite)
    elemList[i].addEventListener("click", shrink)
}

function turnGreen(event){
    this.style.backgroundColor = "green";
}

function turnRed(event){
    this.style.backgroundColor = `rgb(253, 77, 77)`;
}

function turnWhite(event){
    this.style.backgroundColor = "white";
}

//Shrinking the wrong option

function shrink(event){
    let buttonSize = {
        height: this.clientHeight,
        width: this.clientWidth
    }

    buttonSize.width /= 1.5;
    buttonSize.height /= 1.5 ;

    this.style.height = buttonSize.height + `px`
    this.style.width = buttonSize.width + `px`
    this.style.fontSize = buttonSize.height / 5 + `px`

    if(buttonSize.width <= 45){
        this.remove();
        let elemList = document.getElementsByClassName("wrong");
        if(elemList.length == 0){
            operationNixon();
        }
    }
}

//Operation Nixon
let buttons = [];
let currentButton = 0;

function createButton(){
    
    let button = document.createElement("button")
    button.textContent = buttons[currentButton]
    if(buttons[currentButton] == "Vote Nixon"){
        button.classList = "nixon"
        button.id = "nixon"
        button.addEventListener("mouseover", turnGreen)
        button.addEventListener("click", correctChoice)
    }else{
        button.addEventListener("mouseover", turnRed)
        button.addEventListener("click", wrongChoice)
        button.style.cursor = "not-allowed"
    }
    button.addEventListener("mouseout", turnWhite)
    button.style.position = "relative"
    buttonContainer.appendChild(button)
    
    currentButton++
}

function operationNixon(){
    body.removeEventListener("keypress", operationNixon)
    buttonContainer.innerHTML = "";
    buttonContainer.classList = "nixonContainer";

    for(let i = 0; i < 35; i++){
        buttons[i] = "Vote Nixon"
    }

    let rand1 = Math.floor(Math.random() * 34 )
    let rand2 = Math.floor(Math.random() * 34 )
    let rand3 = Math.floor(Math.random() * 34 )
    while(rand1 == rand2 && rand1 == rand3 && rand2 == rand3){
        rand1 = Math.floor(Math.random() * 34 )
        rand2 = Math.floor(Math.random() * 34 )
        rand3 = Math.floor(Math.random() * 34 )
    }
    buttons[rand1] = "Vote Humbert Humphrey"
    buttons[rand2] = "Vote Shirley Chisholm"
    buttons[rand3] = "Vote Edmund Muskie"

    console.log(buttons)
    let temp = setInterval(createButton, 75);
    setTimeout(function(){
        clearInterval(temp)
    }, 2625)
    
    body.addEventListener("keydown", easterEgg)
}

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
let key = 0;
function easterEgg(event){
    if(event.key == konamiCode[key]){
        key++;
        if(event.key == "Enter"){
            audio.volume = 0.05;
            audio.play();

            setTimeout(stopMusic, 10200);
        }
    }else{
        key = 0;
    }
}

function stopMusic(){
    audio.pause();
}

function correctChoice(){
    window.location.href = "correct/correct.html"
}
function wrongChoice(){
    window.location.href = "wrong/wrong.html"
}