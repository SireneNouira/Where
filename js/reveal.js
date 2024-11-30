// IMPORT
// import the function explosion from confetti.js
import explosion from "./confetti.js";

// GET 
// button for reveal
const button = document.querySelector("button");
// get all div with class .seat
const divNames = document.querySelectorAll(".seat");
var time = 1000;
// EVENT 
button.addEventListener("click", reveal)

// FUNCTION

function reveal(event) {
    explosion();
    divNames.forEach(divName => {
        setTimeout(() => {
            divName.classList.add("appear");
        },time);
        time += 1000;
    });
};