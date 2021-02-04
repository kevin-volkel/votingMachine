"use strict";
body.addEventListener("contextmenu", function(){
    alert("That wasn't rigged at all")
})

window.addEventListener("load", moveNixon)

function moveNixon(){
    console.log("works")
    container.style.top = "0px"
}