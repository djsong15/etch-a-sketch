const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

const gridBoxes = document.querySelectorAll('.grid');
console.log(gridBoxes);
gridBoxes.forEach(grid => {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    })
})