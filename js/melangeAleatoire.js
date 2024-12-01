// GET
// Récupérer la liste des noms dans localStorage
const names = JSON.parse(localStorage.getItem("savedNames")) || []; 
// Récupérer le container and export at burgerMenu
export const container = document.querySelector(".container");
// how much places
const nPlaces = names.length - 1;

// check if il y a au moin deux noms
if (names.length < 2) {
  alert("Aucune donnée valide trouvée. Retour à la page précédente.");
  window.location.href = "index.html"; 
};


// FUNCTIONS

// randomize array name
for(let i = nPlaces; i >= 0; i -= 1){
    // randomizer of x
    let x = (Math.floor(Math.random() * nPlaces));
    // create temp var to containe actual index
    let temp = names[i];
    // switch the actual index(i) and randomze index(x)
    names[i] = names[x];
    names[x] = temp;
};


// named place 
names.forEach((name) => {
        // create p foreach name
        const newP = document.createElement("p");
        // ADD class ".name" at the new P
        newP.classList.add("name");
        // ADD name inside newP
        newP.appendChild(document.createTextNode(`${name}`));

        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat")
        // ADD newP inside newDiv
        newDiv.appendChild(newP);    
        // ADD newdiv at the end of the container div
        container.appendChild(newDiv);
});


