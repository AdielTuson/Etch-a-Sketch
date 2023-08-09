const gridContainer = document.querySelector(".grid");
const resizeGridBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector('#clear');
let numberOfDivs = 16 * 16;
let userInput;


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

        gridDiv.addEventListener('mouseover', () => gridDiv.classList.add('grid-item-hover'));
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
