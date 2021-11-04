const requestItems = 'http://localhost:3000/items';

let getItems = (callback) => {
    fetch(requestItems)
        .then((response) => response.json)
        .then((callback));
};

let renderItems = (data) => {
    let html = document.querySelector('#list-items');

    let renderHtml = data.map((data) => `
        <li>${data.name}</li>
        <li>${data.quantity}</li>
    `);
    html.innerHTML = renderHtml.join('');
}








const appProgram = () => {

    getItems(renderItems);


}

appProgram();