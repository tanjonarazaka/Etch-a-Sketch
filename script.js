const div = document.querySelector(".container");
const btn = document.querySelector("button");

let squareDivs;

createGrid(16);

// --- Event listeners ---
btn.addEventListener("click", () => {
    
    let numSquare = getNumSquare();

    deleteGrid(squareDivs);
    createGrid(numSquare);
})

// --- Helper functions ---
function createGrid(num) {
    let dimension = 960 / num; // dimension for each square
    num *= num;

    console.log(dimension);
    

    for(let i = 0; i < num; i++) {
        div.appendChild(document.createElement("div"));
    }

    
    squareDivs = document.querySelectorAll(".container div");

    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "purple";
        });
        
        squareDiv.style.width = `${dimension}px`;
        squareDiv.style.height = `${dimension}px`;
    });
}

function deleteGrid(elements) {
    elements.forEach((element) => {
        element.remove();
    });
}

function getNumSquare() {
    let numSquare;

    do {
        numSquare = prompt("Enter the number of squares per side (1 - 100)");
    } while (!(numSquare >= 1 && numSquare <= 100));

    return numSquare;
}
