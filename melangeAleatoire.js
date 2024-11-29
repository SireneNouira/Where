// get 
// all names
let names = ["nadir", "sirene", "hamza", "karl", "ali", "jeremi"];
let count = 0;
// all places
const places = document.querySelectorAll(".seat");
// how much places
const nPlaces = places.length;


// event


// functions
// randomize array name
for(let i = nPlaces; i >= 0; i -= 1){
    // randomizer of j 
    let j = (Math.floor(Math.random() * nPlaces));
    // create temp var to containe actual index
    let temp = names[i];
    // switch the actual index(i) and randomze index(j)
    names[i] = names[j];
    names[j] = temp;
};

// named place 
places.forEach((element) => {
    element.innerHTML = names[count];
    count += 1;
});
