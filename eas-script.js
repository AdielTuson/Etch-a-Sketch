
const gridContainer = document.querySelector(".grid");
console.log(gridContainer);
let numberOfDivs = 16 * 16;
console.log(numberOfDivs);
const resizeGridBtn = document.querySelector("#resize-btn");

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

resizeGridBtn.addEventListener('click', () => resizeGrid());

function resizeGrid() {
    const userInput = prompt("Please select a number between 0 and 100 to determine the size of the grid:", 16)
    numberOfDivs = (userInput ** 2);
    console.log(numberOfDivs);
    setGrid(numberOfDivs);
    console.log(numberOfDivs);
}