const genere = document.querySelector(".button-genere > a");
const inputs = document.querySelectorAll("input");
const saveButton = document.getElementById("saveNames");
var noms = [];


window.addEventListener("DOMContentLoaded", loadNames);


saveButton.addEventListener("click", saveNames);


function saveNames() {
  noms = [];
  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      noms.push(input.value.trim());
    }
  });

  if (noms.length >= 2) {
    localStorage.setItem("savedNames", JSON.stringify(noms));
    alert("Prénoms sauvegardés !");
  } else {
    alert("Veuillez remplir les 15 prénoms.");
  }
}


function loadNames() {
  const savedNames = JSON.parse(localStorage.getItem("savedNames"));
  if (savedNames && savedNames.length >= 2) {
    inputs.forEach((input, index) => {
      input.value = savedNames[index] || "";
    });
    alert("Prénoms chargés depuis la dernière sauvegarde !");
  }
}

