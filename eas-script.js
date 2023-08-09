const gridContainer = document.querySelector(".grid");
const resizeGridBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector('#clear');
const rainbowBtn = document.querySelector('#random-color');
const colorBtn = document.querySelector('#color-mode');
    console.log(colorBtn);

let numberOfDivs = 16 * 16;
let userInput;
let isRainbow = false;


//setting the grid item's height and width in percentage to be dynamic
function setGrid(itemsAmount) {
    const gridItemWidth = 100 / Math.sqrt(itemsAmount);
    const gridItemsHeight = gridItemWidth;

    for (let i = 0; i < itemsAmount; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item');
        gridDiv.style.width = `${gridItemWidth}%`;
        gridDiv.style.paddingBottom = `${gridItemsHeight}%`;
        gridContainer.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', () => {
            if (isRainbow){
                gridDiv.style.backgroundColor = getRandomColor();
            }
            else {
                gridDiv.style.backgroundColor = "var(--costume-blue)";
            }
        });
    }

}
setGrid(numberOfDivs);

//A function that will update the grid to the resized size
function resizeGrid() {
    userInput = prompt("Please select a number between 0 and 100 to determine the size of the grid:", 16);
    if (userInput <= 100 && userInput > 0) {
        numberOfDivs = (userInput ** 2);
        resetGrid();
        setGrid(numberOfDivs);
    }
    
    else if (userInput !== null){
        alert("Invalid number");
    }
}

//A function that will reset the grid so a new grid can take it's place
function resetGrid() {
    gridContainer.innerHTML = '';
}

resizeGridBtn.addEventListener('click', () => resizeGrid());

// Add an event listener for 'clear' button
clearBtn.addEventListener('click', () => {
    resetGrid();
    setGrid(numberOfDivs);
});


//Add an event listener to change to rainbow mode
rainbowBtn.addEventListener('click', ()=> {
    isRainbow = true;
    console.log(isRainbow);
});
//will generate a random color in rgb() format
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//Add an event listener to change to color mode
colorBtn.addEventListener('click', () => {
    isRainbow = false;
})
