"use strict";
const field = document.querySelector('.field');
const horse = document.querySelector('.horse');
const allCells = document.querySelectorAll('.cell');
allCells.forEach((item) => item.classList.add('cell_active_allow'));
let prevCell = null;
let count = 0;
field.addEventListener('click', (event) => {
    const td = event.target;
    if (td !== null
        && td.classList.contains('cell')
        && td.classList.contains('cell_active_allow')
        && !td.classList.contains('cell_active_disallow')) {
        allCells.forEach((item) => item.classList.remove('cell_active_allow'));
        horse.classList.add('horse_active');
        td.append(horse);
        const tdParentElement = td.parentElement;
        const currentRowIndex = tdParentElement.sectionRowIndex;
        const currentCellIndex = td.cellIndex;
        let countAllowCells = 0;
        for (let i = 1; i <= 2; i += 1) {
            const rows = [field.rows[currentRowIndex - i], field.rows[currentRowIndex + i]];
            rows.forEach((row) => {
                if (row !== undefined) {
                    const firstCell = row.cells[currentCellIndex - (3 - i)];
                    const secondCell = row.cells[currentCellIndex + (3 - i)];
                    if (firstCell !== undefined && !firstCell.classList.contains('cell_active_disallow')) {
                        firstCell.classList.add('cell_active_allow');
                        countAllowCells += 1;
                    }
                    if (secondCell !== undefined && !secondCell.classList.contains('cell_active_disallow')) {
                        secondCell.classList.add('cell_active_allow');
                        countAllowCells += 1;
                    }
                }
            });
        }
        if (prevCell !== null) {
            count += 1;
            prevCell.textContent = `${count}`;
        }
        td.classList.add('cell_active_disallow');
        prevCell = td;
        if (countAllowCells === 0) {
            let filledCells = 0;
            allCells.forEach((cell) => {
                if (cell.classList.contains('cell_active_disallow'))
                    filledCells += 1;
            });
            if (filledCells === 100) {
                alert('you win!');
            }
            else {
                alert('gamover');
            }
        }
    }
});
const newGame = document.querySelector('.new-game');
newGame.addEventListener('click', () => {
    allCells.forEach((cell) => {
        cell.classList.remove('cell_active_disallow');
        cell.classList.add('cell_active_allow');
        cell.textContent = '';
    });
    count = 0;
    prevCell = null;
    horse.classList.remove('horse_active');
});
//# sourceMappingURL=main.js.map