// GET 
// get menu burger button
const buttonBurger = document.querySelector(".buttonBurger");
// get button create menu burger
const buttonCreate = document.querySelector(".create");
// get disappear button menu burger
const buttonDisappear = document.querySelector(".disappearButtonBurger");
// get menu burger
const menuBurger = document.querySelector(".menuBurger");
// get container from melangeAleatoire
import createAllDiv from "./createDiv.js";
import { container, names } from "./reveal.js";
import disappear from "./diseapper.js";


// EVENT
buttonBurger.addEventListener("click", apearBurgerMenu);
buttonDisappear.addEventListener("click", disappearBurgerMenu);
buttonCreate.addEventListener("click", callDivCreator);


// FUNCTION
// make apear burger menu
function apearBurgerMenu(event) {
    // make appear the disappearision button
    buttonDisappear.style.display = "flex";
    // make appear menu burger
    menuBurger.style.display = "flex";
    // make disappear the appearision button
    disappear(buttonBurger);
};

// make disappear burger menu
function disappearBurgerMenu(event) {
    // make appear the appearision button
    buttonBurger.style.display = "flex";
    // make disappear the disappearision button
    disappear(buttonDisappear);
    // make disappear the nenu burger 
    disappear(menuBurger);
};

// create element in container 
function callDivCreator(event) {

    // get input value in menu burger
    const input = document.querySelector("input");
    const name = (input.value).toString();

    if (name.trim() !== "") {
        names.push(name.trim());

        // set new item on local storage
        localStorage.setItem("savedNames", JSON.stringify(names));

        createAllDiv(name, container);
    };
    // for reset input
    input.value = "";
};

