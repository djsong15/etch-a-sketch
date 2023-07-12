const container = document.querySelector("#container");
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

const gridBoxes = document.querySelectorAll('.grid');
gridBoxes.forEach(grid => {
    grid.addEventListener('mouseover', (event) => {
        event.target.style.background = 'black';
    })
})

const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', (event) => {
    prompt('What size do you want?', )
})