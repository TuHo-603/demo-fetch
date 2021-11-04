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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then(callback);
};

let createItems = () => {
    let getButton = documents.querySelector('#create');
    getButton.onClick = () => {
        let getName = documents.querySelector('input[name="item"]').value;
        let getQuantity = documents.querySelector('input[name="quantity"]').value;
        console.log(getName);
        console.log(getQuantity);
        let setitems = {
            name: getName,
            quantity: getQuantity
        };
        postItems(setitems, () => {

        });
    };
}









let appProgram = () => {

    getItems(renderItems);

    createItems();

}

appProgram();