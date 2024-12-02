//get

var countH = 250;
var countV = 190;
var countH2 = 250;
var count = 0;
const emplacementU = document.querySelector(".u");

emplacementU.addEventListener("click", handleAfficheEmplacementU);

function handleAfficheEmplacementU() {

  if (count === 0) {
    emplacement();
    count += 1;
  }
}

function emplacement() {
  const divs = document.querySelectorAll(".seat");
  divs.forEach((div, index) => {
    if (index < 6) {
      div.style.top = 150 + "px";
      div.style.left = countH + "px";
      countH += 170;
    } else if (index > 6 && index <= 12) {
      div.style.bottom = 100 + "px";
      div.style.left = countH2 + "px";
      countH2 += 170;
    } else {
      div.style.top = countV + "px";
      div.style.left = 80 + "px";
      countV += 130;
    }
  });
}
