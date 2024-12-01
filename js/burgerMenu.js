// GET 
// get menu burger button
const buttonBurger = document.querySelector(".buttonBurger");
// get button create menu burger
const buttonCreate = document.querySelector(".create");
// get container from melangeAleatoire
import createAllDiv from "./createDiv.js";
import { container, names } from "./reveal.js";



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
    if (name.trim() !== "") {
        names.push(name.trim());
    }
    // set new item on local storage
    localStorage.setItem("savedNames", JSON.stringify(names));

   createAllDiv(name, container);
};

