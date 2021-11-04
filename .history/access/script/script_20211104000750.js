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
            <button onclick="delItem(${datas.id})" name="delete">Delete</button>
        </li>
    `);

    html.innerHTML = htmls;
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

    };
}

function delItem(id) {
    fetch(itemApi + '/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }).then(response => response.json()).then(() => {

    })
}