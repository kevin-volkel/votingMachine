"use strict";

body.addEventListener("contextmenu", function(){
    alert("Don't go cheating")
})

let nixonBox = nixon.getBoundingClientRect();
let mcGovernBox = mcgovern.getBoundingClientRect();
let chisholmBox = chisholm.getBoundingClientRect();
let muskieBox = muskie.getBoundingClientRect();

let defaultTop = 212.8000030517578;
let nixonDefaultX = nixonBox.left;
let mcGovernDefaultX = mcGovernBox.left;
let chisholmDefaultX = chisholmBox.left;
let muskieDefaultX = muskieBox.left;


container.addEventListener("mousemove", buttonsMove);

mcgovern.addEventListener("mousedown", youLose)
chisholm.addEventListener("mousedown", youLose)
muskie.addEventListener("mousedown", youLose)

function buttonsMove(event){
    let speed = 9;
    let containerCoords = this.getBoundingClientRect();
    nixonBox = nixon.getBoundingClientRect();
    mcGovernBox = mcgovern.getBoundingClientRect();
    chisholmBox = chisholm.getBoundingClientRect();
    muskieBox = muskie.getBoundingClientRect();

    
    let nixonCoords = {
        top: nixonBox.top,
        left: nixonBox.left
    }
    let mcGovernCoords = {
        top: mcGovernBox.top,
        left: mcGovernBox.left
    }
    let chisholmCoords = {
        top: chisholmBox.top,
        left: chisholmBox.left
    }
    let muskieCoords = {
        top: muskieBox.top,
        left: muskieBox.left
    }

    // Nixon Movement
    if(nixonBox.top + 12 > event.clientY){ //Down
        nixon.style.top = (nixonCoords.top - defaultTop) - ((nixonCoords.top - event.clientY) / 25) + "px"
    }else{ //Up
        nixon.style.top = (nixonCoords.top - defaultTop) - ((nixonCoords.top - event.clientY) / 25) + "px"
    }
    if(nixonBox.left + 80> event.clientX){ 
        nixon.style.left = (nixonCoords.left - nixonDefaultX) - ((nixonCoords.left - event.clientX) / 25) + "px"
    }else{
        nixon.style.left = (nixonCoords.left - nixonDefaultX) - ((nixonCoords.left - event.clientX) / 25) + "px"
    }
    
    // McGovern Y Movement
    if(mcGovernBox.top > event.clientY){
        if(mcGovernBox.top < containerCoords.bottom - 30){
            mcgovern.style.top = (mcGovernCoords.top - defaultTop) + ((mcGovernCoords.top - event.clientY) / 25) + "px"
        }
    }else{
        if(mcGovernBox.top > containerCoords.top + 10){
            mcgovern.style.top = (mcGovernCoords.top - defaultTop) + ((mcGovernCoords.top - event.clientY) / 25) + "px"
        }
    }
    // McGovern X Movement
    if(mcGovernBox.left > event.clientX){
        if(mcGovernBox.left < containerCoords.right - 175){
            mcgovern.style.left = (mcGovernCoords.left - mcGovernDefaultX) + ((mcGovernCoords.left - event.clientX) / 25) + "px"
        }
    }else{
        if(mcGovernBox.left > containerCoords.left + 10){
            mcgovern.style.left = (mcGovernCoords.left - mcGovernDefaultX) + ((mcGovernCoords.left - event.clientX) / 25) + "px"
        }
    }

    // Chisholm Y Movement
    if(chisholmBox.top > event.clientY){
        if(chisholmBox.top < containerCoords.bottom - 30){
            chisholm.style.top = (chisholmCoords.top - defaultTop) + ((chisholmCoords.top - event.clientY) / 25) + "px"
        }
    }else{
        if(chisholmBox.top > containerCoords.top + 10){
            chisholm.style.top = (chisholmCoords.top - defaultTop) + ((chisholmCoords.top - event.clientY) / 25) + "px"
        }
    }
    // Chisholm X Movement
    if(chisholmBox.left > event.clientX){
        if(chisholmBox.left < containerCoords.right - 175){
            chisholm.style.left = (chisholmCoords.left - chisholmDefaultX) + ((chisholmCoords.left - event.clientX) / 25) + "px"
        }
    }else{
        if(chisholmBox.left > containerCoords.left + 10){
            chisholm.style.left = (chisholmCoords.left - chisholmDefaultX) + ((chisholmCoords.left - event.clientX) / 25) + "px"
        }
    }

    // Muskie Y Movement
    if(muskieBox.top > event.clientY){
        if(muskieBox.top < containerCoords.bottom - 30){
            muskie.style.top = (muskieCoords.top - defaultTop) + ((muskieCoords.top - event.clientY) / 25) + "px"
        }
    }else{
        if(mcGovernBox.top > containerCoords.top + 10){
            muskie.style.top = (muskieCoords.top - defaultTop) + ((muskieCoords.top - event.clientY) / 25) + "px"
        }
    }
    // Muskie X  Movement
    if(muskieBox.left > event.clientX){
        if(muskieBox.left < containerCoords.right - 175){
            muskie.style.left = (muskieCoords.left - muskieDefaultX) + ((muskieCoords.left - event.clientX) / 25) + "px"
        }
    }else{
        if(muskieBox.left > containerCoords.left + 40){
            muskie.style.left = (muskieCoords.left - muskieDefaultX) + ((muskieCoords.left - event.clientX) / 25) + "px"
        }
    }

}

nixon.addEventListener("mouseover", youWin);

function youWin(){
    container.removeEventListener("mousemove", buttonsMove)
    body.innerHTML = ""
    let winningText = document.createElement("h1");
    winningText.textContent = "Glad you finally came to your senses";
    winningText.id = "winningText";
    body.appendChild(winningText)
    setTimeout(winner, 5000)
}

function winner(){
    window.location.href = "../correct/correct.html"
}

function youLose(){
    container.removeEventListener("mousemove", buttonsMove)
    body.innerHTML = ""
    let winningText = document.createElement("h1");
    winningText.textContent = "You are a disgrace to your country. Due to your incompetence, we will be making the vote for you. Thank you and god bless America";
    winningText.id = "winningText";
    body.appendChild(winningText)
    setTimeout(winner, 7500)
}