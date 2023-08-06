
const gridContainer = document.querySelector(".grid");
    console.log(gridContainer);
const numberOfDivs = 50*50; 
const resizeGridBtn = document.querySelector("#resize-btn");
//setting the grid item's height and width in percentage to be dynamic
const gridItemWidth = 100/ Math.sqrt(numberOfDivs);
const gridItemsHeight = gridItemWidth;

for (let i = 0; i < numberOfDivs; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');
    gridDiv.style.width = `${gridItemWidth}%`;
    gridDiv.style.paddingBottom = `${gridItemsHeight}%`;
    gridContainer.appendChild(gridDiv);

    gridDiv.addEventListener('mouseover', () => gridDiv.classList.add('grid-item-hover'));
}


    

