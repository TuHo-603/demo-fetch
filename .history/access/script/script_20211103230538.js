let itemApi = 'http://localhost:3000/items';

function start() {

}

start();

function getItems(callBack) {

    fetch(itemApi)
        .then((response) => { response.json() })

    .then(callBack);

}

function renderItems(data) {
    let html = document.querySelector('list-item');
    let htmls = data.map(() => `
        <li>
            <h3>${data.name}</h3>
            <h3>${data.quantity}</h3>
        
        
        </li>
    
    
    `)
}