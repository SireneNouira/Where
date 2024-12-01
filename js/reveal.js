// IMPORT
// import the function explosion from confetti.js
import explosion from "./confetti.js";

// GET 
// button for reveal
const button = document.querySelector(".reveal");

var time = 1000;
// EVENT 
button.addEventListener("click", reveal)

// FUNCTION

function reveal(event) {

    // get all P with class name
    const Ps = document.querySelectorAll(".name");
    
    explosion();
    Ps.forEach(P => {
        setTimeout(() => {
            P.classList.add("appear");
        },time);
        time += 1000;
    });
};