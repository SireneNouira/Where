//GET
// liste d'inputs name et bouton generé
const genere = document.querySelector(".button-genere > a");
const inputs = document.querySelectorAll("input");
var noms = [];

// event
genere.addEventListener("click", handleAddNoms);

// function
function handleAddNoms() {
  inputs.forEach((input) => {
    noms.push(input.value);
  });
}

