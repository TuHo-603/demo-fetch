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
        body: JSON.stringify(data),
    }).then(callback);
}

let createItems = (data, callback) => {

    let getName = document.querySelector('[data-name]');
}









const appProgram = () => {

    getItems(renderItems);


}

appProgram();