// import cross img

// import creator of div element
import createImg from "./createImg.js";

// FUNCTION
export default function createAllDiv(names, where) {
    if (Array.isArray(names)) {
        // named place
        names.forEach(() => {
            // create div foreach name
            const newDiv = document.createElement("div");
            // ADD class ".seat" at the new div
            newDiv.classList.add("seat");
            // ADD newdiv at the end of the container div
            where.appendChild(newDiv);
            // ADD cross icon in new div
            createImg("../icons/croix.png", newDiv);
        });
    }else {
        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat");
        // ADD newdiv at the end of the container div
        where.appendChild(newDiv);
        // ADD cross icon in new div
        createImg("../icons/croix.png", newDiv);

    }
}
