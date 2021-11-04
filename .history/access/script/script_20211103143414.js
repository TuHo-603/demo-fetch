const requestItems = 'http://localhost:3000/items';

let getitems = (callback) => {
    fetch(requestItems)
        .then((response) => response.json)
        .then((callback));
};

let renderItems = (data) => {
    let html = document.querySelector('#list-items');

    let renderHtml = data.map((data) => `
        <li></li>
        <li></li>
        <li></li>
    
    `);
}








const appProgram = () => {



}

appProgram();