// GET 
let nexY = 0;
let nexX = 0;
let startY = 0;
let startX = 0;
var divName;

// EVENT
document.addEventListener("mousedown", drag);

// FUNCTION

function drag(event) {
    divName = event.target;


    startX = event.clientX;
    startY = event.clientY;
    
    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseup", mouseUp)
};

function mouseMove(event) {
    newX = startX - event.clientX; 
    newY = startY - event.clientY; 
    
    
    startX = event.clientX; 
    startY = event.clientY; 

    divName.style.top = (divName.offsetTop - newY) + "px";
    divName.style.left = (divName.offsetLeft - newX) + "px";
};

function mouseUp (event) {
    document.removeEventListener("mousemove", mouseMove);
};

