const container = document.querySelector("#container");
const createGrid = (size) => {
    if (size > 100) {
        alert('Too big! Gonna give you 16 x 16');
        size = 16;
        // return console.error('That\'s too big bro');
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
}
createGrid(16);

const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', () => {
    const response = prompt('What size do you want?');
    if (response !== null) {
        clearGrid();
        createGrid(response);
    }
});

const colorMode = document.querySelector('#color-modes');
colorMode.addEventListener('change', (event) => {
    console.log(colorMode.value);
    // let color;
    // if (colorMode.value === 'black') color = 'black';
    // else if (colorMode.value === 'random') color = Math.floor(Math.random()*16777215).toString(16);
    // else color = 'white';

    let currentGridChild = container.firstChild;
    while (currentGridChild !== container.lastChild) {
        console.log('change');
        currentGridChild.addEventListener('mouseover', (e) => {
            e.target.style.background = colorMode.value === 'black' ? 'black'
                                        : colorMode.value === 'random' ? ('#' + Math.floor(Math.random()*16777215).toString(16))
                                        : 'white';
        });
        currentGridChild = currentGridChild.nextSibling;
    }
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(16);
});