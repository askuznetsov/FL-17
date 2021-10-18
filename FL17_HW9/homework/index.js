/* START TASK 1: Your code goes here */


const cells = document.querySelectorAll('td');

cells.forEach(cellsItem => {
    cellsItem.addEventListener('click', function () {
        cellsItem.classList.add('active');
    })
})

const cellsFirst = document.querySelectorAll('td.first');

cellsFirst.forEach(cellsItem => {
    cellsItem.addEventListener('click', function () {
        cellsItem.closest('tr').classList.add('activeFirst');
    })
})

/*
const cellSpecial = document.getElementById('#special');

cellSpecial.addEventListener('click', function () {
    cells.forEach(cellsItem => {
        cellsItem.addEventListener('click', function () {
            cellsItem.classList.add('active');
        })
})
})
*/

/*const cellsToGreen = document.querySelectorAll('td.active');

cellsToGreen.forEach(cellsItem => {
    cellsItem.addEventListener('click', function () {
        cellsItem.classList.add('active');
    })
})
*/



/* END TASK 1 */

/* START TASK 2: Your code goes here */

/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
