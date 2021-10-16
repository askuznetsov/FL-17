const appRoot = document.getElementById('app-root');

const form = document.createElement('form');
const h1 = document.createElement('h1');

const section = document.createElement('section');
const section2 = document.createElement('section');

const fieldset = document.createElement('fieldset');
const fieldset2 = document.createElement('fieldset');
const p = document.createElement('p');
const p2 = document.createElement('p');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const label = document.createElement('label');
const label2 = document.createElement('label');
const input = document.createElement('input');
const input2 = document.createElement('input');
const select = document.createElement('select');
const option = document.createElement('option');
const table = document.createElement('table');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');
const th5 = document.createElement('th');
const th6 = document.createElement('th');
const td = document.createElement('td');
const tbody = document.createElement('tbody');

const byRegion = document.createTextNode('By Region');
const byLanguage = document.createTextNode('By Language');

let checkedByLanguage = false;
let checkedByRegion = false;


let selectedBy = 'By Region';








function createLayout() {
    appRoot.appendChild(form);
    form.appendChild(h1);

    h1.innerHTML = 'Countries Search';

    createFirstSection();
    input.setAttribute('value', 'By Region');
    input2.setAttribute('value', 'By Language');

    createSecondSection();

    renderTable();
}

createLayout();











function createFirstSection() {

    form.appendChild(section);

    section.appendChild(fieldset);

    fieldset.appendChild(p);

    p.innerHTML = 'Please choose the type of search:';

    fieldset.appendChild(ul);

    ul.appendChild(li);

    li.appendChild(label);

    label.setAttribute('for', 'title_1');
    label.appendChild(input);
    label.appendChild(byRegion);

    input.setAttribute('type', 'radio');
    input.setAttribute('id', 'title_1');
    input.setAttribute('name', 'title');
    input.setAttribute('value', 'By Region');
    input.addEventListener('click', () => {
        selectedBy = 'By Region';
        createListForDropdown(selectedBy);
        checkedByRegion = document.getElementById('title_1').checked;
        if (checkedByRegion) {
            checkedByLanguage = false;
        }
    });


    ul.appendChild(li2);

    li2.appendChild(label2);

    label2.setAttribute('for', 'title_1');
    label2.appendChild(input2);
    label2.appendChild(byLanguage);

    input2.setAttribute('type', 'radio');
    input2.setAttribute('id', 'title_2');
    input2.setAttribute('name', 'title');
    input2.setAttribute('value', 'By Language');
    input2.addEventListener('click', () => {
        selectedBy = 'By Language';
        createListForDropdown(selectedBy);
        checkedByLanguage = document.getElementById('title_2').checked;
        if (checkedByLanguage) {
            checkedByRegion = false;
        }
    })
}


function createSecondSection() {
    form.appendChild(section2);
    section2.appendChild(fieldset2);
    fieldset2.appendChild(p2);
    p2.innerHTML = 'Please choose search query:';
    fieldset2.appendChild(select);
    select.setAttribute('name', 'select');
    select.appendChild(option);
    option.innerHTML = 'Select value';
    select.setAttribute('disabled', '');
}

function createListForDropdown(selectedBy) {
    select.removeAttribute('disabled', '');
    select.innerHTML = '';
    if (selectedBy === 'By Region') {
        externalService.getRegionsList().forEach(element => {
            const option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            select.appendChild(option);
        });
    } else if (selectedBy === 'By Language') {
        externalService.getLanguagesList().forEach(element => {
            const option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            select.appendChild(option);
        });
    }
}

function renderTable() {
    appRoot.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);

    th1.innerText = 'Country Name';
    th2.innerText = 'Capital';
    th3.innerText = 'World Region';
    th4.innerText = 'Languages';
    th5.innerText = 'Area';
    th6.innerText = 'Flag';

    table.appendChild(tbody);
}

function renderTableByRegion(option) {
    externalService.getCountryListByRegion(option).forEach(element => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const tdName = document.createElement('td');
        tr.appendChild(tdName);
        tdName.innerText = element.name;
        const tdCapital = document.createElement('td');
        tr.appendChild(tdCapital);
        tdCapital.innerText = element.capital;
        const tdRegion = document.createElement('td');
        tr.appendChild(tdRegion);
        tdRegion.innerText = element.region;
        const tdLang = document.createElement('td');
        const languages = Object.values(element.languages).join(', ');
        tdLang.innerText = languages;
        tr.appendChild(tdLang);
        const tdArea = document.createElement('td');
        tr.appendChild(tdArea);
        tdArea.innerText = element.area;
        const tdFlag = document.createElement('td');
        tr.appendChild(tdFlag);
        const img = document.createElement('img');
        img.setAttribute('src', element.flagURL);
        tdFlag.appendChild(img);
    })
}

function renderTableByLanguage(option) {
    externalService.getCountryListByLanguage(option).forEach(element => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const tdName = document.createElement('td');
        tr.appendChild(tdName);
        tdName.innerText = element.name;
        const tdCapital = document.createElement('td');
        tr.appendChild(tdCapital);
        tdCapital.innerText = element.capital;
        const tdRegion = document.createElement('td');
        tr.appendChild(tdRegion);
        tdRegion.innerText = element.region;
        const tdLang = document.createElement('td');
        const languages = Object.values(element.languages).join(', ');
        tdLang.innerText = languages;
        tr.appendChild(tdLang);
        const tdArea = document.createElement('td');
        tr.appendChild(tdArea);
        tdArea.innerText = element.area;
        const tdFlag = document.createElement('td');
        tr.appendChild(tdFlag);
        const img = document.createElement('img');
        img.setAttribute('src', element.flagURL);
        tdFlag.appendChild(img);
    })
}

function renderBySelectedValue() {
    tbody.innerHTML = '';
    if (checkedByRegion) {
        renderTableByRegion(select['value']);
    } else if (checkedByLanguage) {
        renderTableByLanguage(select['value']);
    }
}

function onclickSelectedValueEvent() {
    select['value'].addEventListener('click', () => {
        renderBySelectedValue();
    })
}
/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/