// GET

// all names
let names = ["nadir", "sirene", "hamza", "karl", "ali", "jeremi", "marion", "mohand", "hamed", "simon", "clement", "élodi", "naïm A", "naïm B", "mathias"];
// divs
const row = document.querySelector(".row");
const row2 = document.querySelector(".deux");
const col = document.querySelector(".col");
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
names.forEach((name, index) => {
    if (index < Math.ceil((names.length - 4) / 2)) {
        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat")
        // ADD name inside newDiv
        newDiv.appendChild(document.createTextNode(`${name}`));    
        // ADD new div at the end of the ROW div
        row.appendChild(newDiv);

    }else if(index >= Math.ceil((names.length - 4) / 2) && index <= Math.ceil(names.length - 4)){
        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat")
        // ADD name inside newDiv
        newDiv.appendChild(document.createTextNode(`${name}`));    
        // ADD new div at the end of the ROW2 div
        row2.appendChild(newDiv); 

    }else{
        // create div foreach name
        const newDiv = document.createElement("div");
        // ADD class ".seat" at the new div
        newDiv.classList.add("seat")
        // ADD name inside newDiv
        newDiv.appendChild(document.createTextNode(`${name}`));    
        // ADD new div at the end of the COL div
        col.appendChild(newDiv);
    };
});
