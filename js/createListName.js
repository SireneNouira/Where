// import creator of img
import createImg from "./createImg.js";

export default function createListName(name, where) {
    // create div foreach name
    const newDiv = document.createElement("div");
    // ADD class ".nameInList" at the new div
    newDiv.classList.add("nameInList");
    // ADD name in newDiv
    newDiv.innerHTML += name;
    // ADD cross icon in listDiv
    createImg("../icons/croix.png", newDiv);
    // ADD newdiv at the end of the container div
    where.appendChild(newDiv);
};