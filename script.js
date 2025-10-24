const DEFAULT_COLOR = "black";
const DEFAULT_NUM_OF_SQUARE = 16;
const div = document.querySelector(".container");
const newBtn = document.querySelector(".newBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const colorBtn = document.querySelector(".colorBtn");
const clearBtn = document.querySelector(".clearBtn");

let squareDivs;
let color = DEFAULT_COLOR;
let numOfSquare = DEFAULT_NUM_OF_SQUARE;


createGrid(numOfSquare);

// --- Event listeners ---
newBtn.addEventListener("click", () => {

    numOfSquare = getNumSquare();

    deleteGrid(squareDivs);
    createGrid(numOfSquare);
});

rainbowBtn.addEventListener("click", () => {
    color = "rainbow";
});

colorBtn.addEventListener("click", () => {
    color = "black";
});

clearBtn.addEventListener("click", () => {
    deleteGrid(squareDivs);
    createGrid(numOfSquare);
});


// --- Helper functions ---

function setColor(e) {
    if(color === "rainbow") {
        e.target.style.backgroundColor = "rgb(" + randomColor() +
            ", " + randomColor() + ", " + randomColor() + ")";
    }

    else if(color === "black") {
        e.target.style.backgroundColor = color;
    } 
}

function createGrid(numOfSquare) {
    let dimension = 800 / numOfSquare; // dimension for each square
    numOfSquare *= numOfSquare;

    for (let i = 0; i < numOfSquare; i++) {
        div.appendChild(document.createElement("div"));
    }

    squareDivs = document.querySelectorAll(".container div");

    squareDivs.forEach((squareDiv) => {
        squareDiv.style.width = `${dimension}px`;
        squareDiv.style.height = `${dimension}px`;

        squareDiv.addEventListener("mouseover", setColor);
    });
}

function deleteGrid(elements) {
    elements.forEach((element) => {
        element.remove();
    });
}

function getNumSquare() {
    let num;

    do {
        num = prompt("Enter the number of squares per side (integers from 1 - 100)");
        num = Math.floor(num);
    } while (!(num >= 1 && num <= 100));

    return num;
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}