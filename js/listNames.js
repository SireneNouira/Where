// GET 
const listDiv = document.querySelector(".listNames");
// get names from local storage 
import { names } from "./reveal.js";
// import creator of img
import createImg from "./createImg.js";
// import disappear function
import disappear from "./diseapper.js";

var count = 0;


names.forEach((name) => {
    // create div foreach name
    const newDiv = document.createElement("div");
    // ADD class ".nameInList" at the new div
    newDiv.classList.add("nameInList");
    // ADD name in newDiv
    newDiv.innerHTML += name;
    // ADD cross icon in listDiv
    createImg("../icons/croix.png", newDiv);
    // ADD newdiv at the end of the container div
    listDiv.appendChild(newDiv);
});

const imgs = document.querySelectorAll(".divCross");


// EVENT
imgs.forEach(img => {
    img.addEventListener("click", suppName);
});



function suppName(event) {
    // get container div to delete it
    let containerDivs = document.querySelectorAll(".seat");
    console.log(containerDivs);
    // delete the container div 
    disappear(containerDivs[count]);
    count += 1;
    // supp la div de la list 
    disappear(event.target.parentElement);
    
    // get text of the previous sibling of the target event and transforme the value into string
    let value = (event.target.previousSibling.textContent).toString();
    
    // find the first index if element == value
    var index = names.findIndex((element) => element == value);
    // for supp one element at the index
    names.splice(index, 1);
    
    // set new item on local storage
    localStorage.setItem("savedNames", JSON.stringify(names));
};