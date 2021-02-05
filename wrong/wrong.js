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
    let speed = 15;
    let y = 0;
    let x = 0;
    let angle = 0;
    let containerCoords = this.getBoundingClientRect();
    nixonBox = nixon.getBoundingClientRect();
    mcGovernBox = mcgovern.getBoundingClientRect();
    chisholmBox = chisholm.getBoundingClientRect();
    muskieBox = muskie.getBoundingClientRect();


    let nixonCoords = {
        top: nixonBox.top - (nixon.style.height / 2),
        left: nixonBox.left + (nixon.style.width / 2)
    }
    let mcGovernCoords = {
        top: mcGovernBox.top - (mcgovern.style.height / 2),
        left: mcGovernBox.left + (mcgovern.style.width / 2)
    }
    let chisholmCoords = {
        top: chisholmBox.top - (chisholm.style.height / 2),
        left: chisholmBox.left + (chisholm.style.width / 2)
    }
    let muskieCoords = {
        top: muskieBox.top - (muskie.style.height / 2),
        left: muskieBox.left + (muskie.style.width / 2)
    }

    // Nixon Movement
    y = Math.abs(event.clientY - nixonCoords.top)
    x = Math.abs(event.clientX - nixonCoords.left)
    angle = Math.atan(y/x)

    if(nixonCoords.top + 12 > event.clientY){ //Down
        nixon.style.top = (nixonCoords.top - defaultTop) - (Math.sin(angle) * speed) + "px"
    }else{ //Up
        nixon.style.top = (nixonCoords.top - defaultTop) + (Math.sin(angle) * speed) + "px"
    }
    if(nixonCoords.left + 80> event.clientX){ 
        nixon.style.left = (nixonCoords.left - nixonDefaultX) - (Math.cos(angle) * speed) + "px"
    }else{
        nixon.style.left = (nixonCoords.left - nixonDefaultX) + (Math.cos(angle) * speed) + "px"
    }
    
    // McGovern Movement
    y = Math.abs(event.clientY - mcGovernCoords.top)
    x = Math.abs(event.clientX - mcGovernCoords.left)
    angle = Math.atan(y/x)

    // McGovern Y Movement
    if(mcGovernCoords.top > event.clientY){
        if(mcGovernCoords.top < containerCoords.bottom - 50){
            mcgovern.style.top = (mcGovernCoords.top - defaultTop) + (Math.sin(angle) * speed) + "px"
        }
    }else{
        if(mcGovernCoords.top > containerCoords.top + 30){
            mcgovern.style.top = (mcGovernCoords.top - defaultTop) - (Math.sin(angle) * speed) + "px"
        }
    }
    // McGovern X Movement
    if(mcGovernCoords.left > event.clientX){
        if(mcGovernCoords.left < containerCoords.right - 220){
            mcgovern.style.left = (mcGovernCoords.left - mcGovernDefaultX) + (Math.cos(angle) * speed) + "px"
        }
    }else{
        if(mcGovernCoords.left > containerCoords.left + 30){
            mcgovern.style.left = (mcGovernCoords.left - mcGovernDefaultX) - (Math.cos(angle) * speed) + "px"
        }
    }

    // Chisholm Movement

    y = Math.abs(event.clientY - chisholmCoords.top)
    x = Math.abs(event.clientX - chisholmCoords.left)
    angle = Math.atan(y/x)

    // Chisholm Y Movement
    if(chisholmCoords.top > event.clientY){
        if(chisholmCoords.top < containerCoords.bottom - 50){
            chisholm.style.top = (chisholmCoords.top - defaultTop) + (Math.sin(angle) * speed) + "px"
        }
    }else{
        if(chisholmCoords.top > containerCoords.top + 30){
            chisholm.style.top = (chisholmCoords.top - defaultTop) - (Math.sin(angle) * speed) + "px"
        }
    }
    // Chisholm X Movement
    if(chisholmCoords.left > event.clientX){
        if(chisholmCoords.left < containerCoords.right - 200){
            chisholm.style.left = (chisholmCoords.left - chisholmDefaultX) + (Math.cos(angle) * speed) + "px"
        }
    }else{
        if(chisholmCoords.left > containerCoords.left + 30){
            chisholm.style.left = (chisholmCoords.left - chisholmDefaultX) - (Math.cos(angle) * speed) + "px"
        }
    }

    // Muskie Movement

    y = Math.abs(event.clientY - muskieCoords.top)
    x = Math.abs(event.clientX - muskieCoords.left)
    angle = Math.atan(y/x)

    // Muskie Y Movement
    if(muskieCoords.top > event.clientY){
        if(muskieCoords.top < containerCoords.bottom - 50){
            muskie.style.top = (muskieCoords.top - defaultTop) + (Math.sin(angle) * speed) + "px"
        }
    }else{
        if(muskieCoords.top > containerCoords.top + 30){
            muskie.style.top = (muskieCoords.top - defaultTop) - (Math.sin(angle) * speed) + "px"
        }
    }
    // Muskie X  Movement
    if(muskieCoords.left > event.clientX){
        if(muskieCoords.left < containerCoords.right - 200){
            muskie.style.left = (muskieCoords.left - muskieDefaultX) + (Math.cos(angle) * speed) + "px"
        }
    }else{
        if(muskieCoords.left > containerCoords.left + 30){
            muskie.style.left = (muskieCoords.left - muskieDefaultX) - (Math.cos(angle) * speed) + "px"
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