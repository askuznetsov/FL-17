let currentPageOne = localStorage.getItem('Page 1 clicks') ? parseInt(localStorage.getItem('Page 1 clicks')) : 0;
let currentPageTwo = localStorage.getItem('Page 2 clicks') ? parseInt(localStorage.getItem('Page 2 clicks')) : 0;
let currentPageThree = localStorage.getItem('Page 3 clicks') ? parseInt(localStorage.getItem('Page 3 clicks')) : 0;

function visitLink(path) {
    if (path === 'Page1') {
        currentPageOne += 1;
        localStorage.setItem('Page 1 clicks', currentPageOne);
    } else if (path === 'Page2') {
        currentPageTwo += 1;
        localStorage.setItem('Page 2 clicks', currentPageTwo);
    } else if (path === 'Page3') {
        currentPageThree += 1;
        localStorage.setItem('Page 3 clicks', currentPageThree);
    }
}

function viewResults() {
    let div = document.createElement('div');
    document.querySelector('.container').appendChild(div);

    if (currentPageOne === null) {
        currentPageOne = 0;
    } else if (currentPageTwo === null) {
        currentPageTwo = 0;
    } else if (currentPageThree === null) {
        currentPageThree = 0;
    }

    div.innerHTML =
        `<ul>
    <li>You visited Page 1 ${currentPageOne} time(s)</li>
    <li>You visited Page 2 ${currentPageTwo} time(s)</li>
    <li>You visited Page 3 ${currentPageThree} time(s)</li>
    </ul>`;

    localStorage.clear();
    currentPageOne = 0;
    currentPageTwo = 0;
    currentPageThree = 0;
}