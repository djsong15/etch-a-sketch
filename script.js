const container = document.querySelector("#container");
const div = document.createElement("div");

function createGrid() {
    for (let i = 1; i <= 16; i++) {
        div.textContent = 'hello';
        container.appendChild(div);
    }
}
createGrid();