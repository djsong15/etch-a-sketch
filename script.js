const container = document.querySelector("#container");
const createGrid = (size) => {
    if (size > 100) {
        alert('Too big!');
        return console.error('That\'s too big bro');
    }
    for (let i = 1; i <= size ** 2; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${(800 / size) - 2}px`;
        grid.style.width = `${(800 / size) - 2}px`;
        grid.addEventListener('mouseover', (e) => e.target.style.background = 'black');
        container.appendChild(grid);
    }
}
const clearGrid = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(16);
}
createGrid(16);

const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', () => {
    const response = prompt('What size do you want?');
    if (response !== null) {
        clearGrid();
        createGrid(16);
    }
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearGrid);