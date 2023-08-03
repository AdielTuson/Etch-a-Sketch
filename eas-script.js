
const gridContainer = document.querySelector(".grid");
    console.log(gridContainer);
const numberOfDivs = 16*16; 

for (let i = 0; i < numberOfDivs; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item')
    gridContainer.appendChild(gridDiv);
}

    

