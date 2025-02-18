// IMPORT
// import the function explosion from confetti.js
import explosion from "./confetti.js";
import createAllDiv from "./createDiv.js";
import randomizer from "./melangeAleatoire.js";
import distributor from "./distributor.js";
import disappear from "./diseapper.js";

// GET 
// Récupérer la liste des noms dans localStorage
export const names = JSON.parse(localStorage.getItem("savedNames")) || [];
// Récupérer le container and export at burgerMenu
export const container = document.querySelector(".container");
// button for reveal
const revealButton = document.querySelector(".reveal");
// burger button
const burgerButton = document.querySelectorAll(".plus");
// menu burger
const menuBurger = document.querySelector(".menuBurger");
var time = 1000;
var count = 0;


// TESTS
// check if il y a au moin deux noms
if (names.length < 2) {
    alert("Aucune donnée valide trouvée. Retour à la page précédente.");
    window.location.href = "../Accueil/Accueil.html";
};


// EVENT 
revealButton.addEventListener("click", reveal)

// create div foreach name
createAllDiv(names, container);

// FUNCTION
function reveal(event) {

    // get all div with class .seat
    const seatDivs = document.querySelectorAll(".seat");
    // get cross icones 
    const crossNameLists = document.querySelectorAll(".divCross");
    

    // return names random
    let namesRandom = randomizer(names)

    // give an p with the name in at the div 
    seatDivs.forEach(seatDiv => {
        distributor(seatDiv, namesRandom[count])
        count += 1;
    });

    // get all P with class name
    const Ps = document.querySelectorAll(".name");
    
    explosion();
    Ps.forEach(P => {
        setTimeout(() => {
            P.classList.add("appear");
        },time);
        time += 1000;
    });

    disappear(revealButton);
    disappear(crossNameLists);
    disappear(burgerButton);
    disappear(menuBurger);
};
