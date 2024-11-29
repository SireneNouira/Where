// GET

// all names
let names = ["nadir", "sirene", "hamza", "karl", "ali", "jeremi"];
// div row
const row = document.querySelector(".row");
// how much places
const nPlaces = names.length - 1;


// event


// functions

// randomize array name
for(let i = nPlaces; i >= 0; i -= 1){
    // randomizer of x
    let x = (Math.floor(Math.random() * nPlaces));
    // create temp var to containe actual index
    let temp = names[i];
    // switch the actual index(i) and randomze index(x)
    names[i] = names[x];
    names[x] = temp;
};

// named place 
names.forEach((name) => {
    // create div foreach name
    const newDiv = document.createElement("div");
    // ADD class ".seat" at the new div
    newDiv.classList.add("seat")
    // ADD name inside newDiv
    newDiv.appendChild(document.createTextNode(`${name}`));
    // ADD new div at the end of the row div
    row.appendChild(newDiv);
});
