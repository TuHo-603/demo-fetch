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
        <li id="item-${datas.id}">
            <h3>Tên mặt hàng: ${datas.name}</h3>
            <p>Số lượng: ${datas.quantity}</p>
            <button onclick="delItem(${datas.id})">Delete</button>
            <button onclick="repairItem(${datas.id}) name="repair">Repair</button>
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
            body: JSON.stringify(data)
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
        if (name !== null && quantity !== null) {
            postItem(formItem);
        }
    };
}

function delItem(id) {
    fetch(itemApi + "/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            let getLi = document.querySelector(`#item-${data.id}`);
            if (getLi) {
                getLi.remove();
            }
        });
}

function repairItem(id) {
    fetch(itemApi + "/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data) => {
            let name = document.querySelector('input[name="name"]');
            let quantity = document.querySelector('input[name="quantity"]');
            let btnRepair = document.querySelector('input[name="repair"]');

            btnRepair.addEventListener("onclick", () => {
                if (true) {
                    name.focus();
                }
            });

            let formItem = {
                name: name.value,
                quantity: quantity.value,
            };
            delItem(data.id);
            if (name != null && quantity != null) {
                postItem(formItem);
            }
        });
}