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
buttonCreate.addEventListener("click", callDivCreator);


// FUNCTION

// make apear burger menu
function apearBurgerMenu(event) {
};

// create element in container 
function callDivCreator(event) {

    // get input value in menu burger
    const input = document.querySelector("input");
    const name = (input.value).toString();

    if (name.trim() !== "") {
        console.log(name)
        names.push(name.trim());    

        // set new item on local storage
        localStorage.setItem("savedNames", JSON.stringify(names));

        createAllDiv(name, container);
    };
    // for reset input
    input.value = "";
};

