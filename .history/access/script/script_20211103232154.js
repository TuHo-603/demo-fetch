let itemApi = 'http://localhost:3000/items';

function start() {
    getItems(renderItems);

    createItem();
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

function postItem(data, callBack) {
    fetch(itemApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then(callBack);
}

function createItem() {
    let getButton = document.querySelector('#create');

    getButton.onclick = () => {
        let name = document.querySelector('input[name="name"]').value;
        let quantity = document.querySelector('input[name="quantity"]').value;

        let formItem = {
            name: name,
            quantity: quantity,
        };

        postItem(formItem);

    }
}