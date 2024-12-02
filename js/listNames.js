// GET 
const listDiv = document.querySelector(".listNames");
// get names from local storage 
import { names } from "./reveal.js";
// import disappear function
import disappear from "./diseapper.js";
// import list name creator
import createListName from "./createListName.js";

var count = 0;


names.forEach((name) => {
    createListName(name, listDiv);
});

const imgs = document.querySelectorAll(".divCross");

// EVENT
imgs.forEach(img => {
    img.addEventListener("click", suppName);
});


export default function suppName(event) {
    // get container div to delete it
    let containerDivs = document.querySelectorAll(".seat");
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