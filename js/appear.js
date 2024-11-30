// GET 
// get all div with class .seat
const divNames = document.querySelectorAll(".seat");
var time = 1000;
// EVENT 
window.addEventListener("load", appear);

// FUNCTION

function appear(event) {
    divNames.forEach(divName => {
        setTimeout(() => {
            divName.classList.add("appear");
        },time);
        time += 1000;
    });
};