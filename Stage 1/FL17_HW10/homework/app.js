const root = document.getElementById('root');

const btnAddTweet = document.querySelector('.addTweet');
const tweetSection = document.getElementById('modifyItem');
const tweetItems = document.getElementById('tweetItems')
const textArea = document.getElementById('modifyItemInput');
const btnSaveChanges = document.getElementById('saveModifiedItem');



const ul = document.getElementById('list');
const btnCancel = document.getElementById('cancelModification');

btnAddTweet.addEventListener('click', () => {
    tweetSection.removeAttribute('class', 'hidden');
    tweetItems.classList.add('class', 'hidden');
})



btnSaveChanges.addEventListener('click', () => {
    if (textArea.value === '') {
        return false;
    } else {
        tweetItems.removeAttribute('class', 'hidden');
        tweetSection.classList.add('class', 'hidden');
        addLi();
        textArea.value = '';
    }
})

btnCancel.addEventListener('click', () => {
    tweetItems.removeAttribute('class', 'hidden');
    tweetSection.classList.add('class', 'hidden');
    textArea.value = '';
})


function addLi() {
    const li = document.createElement('li');
    const btnRemove = document.createElement('button');
    const btnLike = document.createElement('button');

    btnRemove.innerHTML = 'remove';
    btnLike.innerHTML = 'like';

    li.innerHTML = textArea.value;

    ul.appendChild(li);
    li.appendChild(btnRemove);
    li.appendChild(btnLike);

    btnRemove.classList.add('buttons');
    btnRemove.classList.add('m_left');
    btnLike.classList.add('buttons');
}