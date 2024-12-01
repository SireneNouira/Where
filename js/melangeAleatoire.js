// FUNCTION
// randomize array name
export default function randomizer(names) {
  // how much places
  const nPlaces = names.length - 1;

  for(let i = nPlaces; i >= 0; i -= 1){
    // randomizer of x
    let x = (Math.floor(Math.random() * nPlaces));
    // create temp var to containe actual index
    let temp = names[i];
    // switch the actual index(i) and randomze index(x)
    names[i] = names[x];
    names[x] = temp;
  };
  return names;
};