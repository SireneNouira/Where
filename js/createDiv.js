// FUNCTION
export default function createAllDiv(names, where) {
    // named place
    names.forEach(() => {
        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat");
        // ADD newdiv at the end of the container div
        where.appendChild(newDiv);
    });
}
