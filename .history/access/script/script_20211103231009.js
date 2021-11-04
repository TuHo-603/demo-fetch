let itemApi = 'http://localhost:3000/items';

function start() {
    getItems(renderItems);
}

start();

function getItems(callBack) {

    fetch(itemApi)
        .then((response) => response.json())
        .then(callBack);

}

function renderItems(data) {
    let html = document.querySelector('#list-items');
    let htmls = data.map((datas) => `
        <li>
            <h3>${datas.name}</h3>
            <p>${datas.quantity}</p>
        </li>
    `);

    html.innerHTML = htmls.join('');
}