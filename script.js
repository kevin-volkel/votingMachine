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
    this.style.backgroundColor = "#f26932";
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
    button.classList += " button"
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
    buttons[rand1] = "Vote George McGovern"
    buttons[rand2] = "Vote Shirley Chisholm"
    buttons[rand3] = "Vote Edmund Muskie"   

    for(let i = 0; i < 35; i++){
        setTimeout(createButton, i * 50)
    }
    
    body.addEventListener("keydown", easterEgg)
}

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
let key = 0;
function easterEgg(event){
    if(event.key == konamiCode[key]){
        key++;
        if(event.key == "Enter"){
            body.removeEventListener("keydown", easterEgg)
            audio.volume = 0.05;
            audio.play();
            alert("God Bless America")

            setTimeout(stopMusic, 10200);

            let buttons = document.getElementsByClassName("button")
            console.log(buttons)
            let blue = [0, 1, 2, 5, 6, 7, 10, 11, 12];
            let red = [3, 4, 13, 14, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34]
            let white = [8, 9, 15, 16, 17, 18, 19, 25, 26, 27, 28, 29]
            for(let i = 0; i < blue.length; i++){
                buttons[blue[i]].style.backgroundColor = "blue";
                buttons[blue[i]].style.color = "blue";
            }
            for(let i = 0; i < red.length; i++){
                buttons[red[i]].style.backgroundColor = "red";
                buttons[red[i]].style.color = "red";
            }
            for(let i = 0; i < white.length; i++){
                buttons[white[i]].style.backgroundColor = "white";
                buttons[white[i]].style.color = "white";
            }
            for(let i = 0; i < buttons.length; i++){
                buttons[i].removeEventListener("mouseover", turnGreen)
                buttons[i].removeEventListener("mouseout", turnWhite)
                buttons[i].removeEventListener("mouseover", turnRed)
            }
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