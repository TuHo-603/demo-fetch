const requestItems = 'http://localhost:3000/items';

let getItems = (callback) => {
    fetch(requestItems)
        .then((response) => response.json())
        .then((callback));
};

let renderItems = (data) => {
    let html = document.querySelector('#list-items');

    let renderHtml = data.map((data) => `
        <li>${data.name}</li>
        <li>${data.quantity}</li>
    `);
    html.innerHTML = renderHtml.join('');
};


let postItems = (data, callback) => {
    fetch(requestItems, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then((response) => {
        response.json();
    }).then(callback);
};

let createItems = () => {
    let getButton = document.querySelector('#create');
    getButton.onClick = () => {
        let getName = document.querySelector('input[name="item"]').value;
        let getQuantity = document.querySelector('input[name="quantity"]').value;

        let setitems = {
            name: getName,
            quantity: getQuantity
        };
        postItems(setitems, () => {
            renderItems();
        });
    };
}









let appProgram = () => {

    getItems(renderItems);

    createItems();

}

appProgram();