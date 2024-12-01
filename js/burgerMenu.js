// GET 
// get menu burger button
const buttonBurger = document.querySelector(".buttonBurger");
// get button create menu burger
const buttonCreate = document.querySelector(".create");
// get container from melangeAleatoire
import { container } from "./melangeAleatoire.js";



// EVENT
buttonBurger.addEventListener("click", apearBurgerMenu);
buttonCreate.addEventListener("click", createDiv);


// FUNCTION

// make apear burger menu
function apearBurgerMenu(event) {
};

// create element in container 
function createDiv(event) {

    // get input value in menu burger
    const name = (document.querySelector("input").value).toString();    

    // create new p
    const newP = document.createElement("p");
    // ADD class ".name" at the new P
    newP.classList.add("name");
    // ADD name inside newP
    newP.appendChild(document.createTextNode(`${name}`));

    // create div
    const newDiv = document.createElement("div");
    // ADD class ".seat" at the new div
    newDiv.classList.add("seat")
    // ADD newP inside newDiv
    newDiv.appendChild(newP);    
    // ADD newdiv at the end of the container div
    container.appendChild(newDiv);
};

