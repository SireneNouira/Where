export default function distributor(newDiv, name){
    // create p foreach seatDiv
    const newP = document.createElement("p");
    // ADD class ".name" at the new P
    newP.classList.add("name");
    // ADD name inside newP
    newP.appendChild(document.createTextNode(`${name}`));
    // ADD newP inside newDiv
    newDiv.appendChild(newP);
};