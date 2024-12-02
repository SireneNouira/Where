const genere = document.querySelector(".button-genere > a");
const inputs = document.querySelectorAll("input");
const saveButton = document.getElementById("saveNames");
const resetButton = document.getElementById("resetFields");

var noms = [];


window.addEventListener("DOMContentLoaded", loadNames);


saveButton.addEventListener("click", saveNames);


function saveNames() {
  noms = [];
  inputs.forEach((input) => {
    const value = (input.value).toString();
    if (value.trim() !== "") {
      noms.push(value.trim());
    }
  });

  if (noms.length >= 2) {
    localStorage.setItem("savedNames", JSON.stringify(noms));
    alert("Prénoms sauvegardés !");
  } else {
    alert("Veuillez remplir au minimum 2 prénoms.");
  }
}


function loadNames() {
  const savedNames = JSON.parse(localStorage.getItem("savedNames"));
  if (savedNames && savedNames.length >= 2) {
    inputs.forEach((input, index) => {
      input.value = savedNames[index] || ""; // si un prenom n'est pas trouvé, alors champ vide ""
    });
    alert("Prénoms chargés depuis la dernière sauvegarde !");
  }
}

resetButton.addEventListener("click", resetFields);

function resetFields() {
  inputs.forEach((input) => {
    input.value = ""; // Vide chaque champ d'entrée
  });
}


// envoyer la liste au fichoer js melange aleatoire


genere.addEventListener("click", () => {
  const savedNames = JSON.parse(localStorage.getItem("savedNames"));
  if (savedNames && savedNames.length >= 2) {
    window.location.href = "melangeAleatoire.js"; 
  } else {
    alert("Veuillez d'abord sauvegarder au moins 2 prénoms.");
  }
});
