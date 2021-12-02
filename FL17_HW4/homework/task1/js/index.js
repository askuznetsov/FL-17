// Your code goes here
const requestURL = 'https://jsonplaceholder.typicode.com/users';
const body = document.querySelector('body');
const h1 = document.createElement('h1');
function sendRequest() {
    return new Promise((res) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestURL);
        xhr.onload = () => {
            res(JSON.parse(xhr.response));
        }
        xhr.send();
    })
}

sendRequest().then(data => {
    console.log(JSON.stringify(data));
    data.forEach(element => {
        const { id, name, username, email } = element;
        JSON.stringify(element)
        body.innerHTML += `<p>${id}</p>
        <p>${name}</p>
        <p>${username}</p>
        <p>${email}</p>
        `
    });
});