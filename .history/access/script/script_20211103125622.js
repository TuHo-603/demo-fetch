const apirequest = '  http://localhost:3000/course';

let callData = (data) => {
    fetch(apirequest).then((response) => {
        return response.json();
    }).then(data);
};

let handleData = () => {
    callData(renderDatatoHtml);
};

handleData();

let renderDatatoHtml = (data) => {
    let html = document.querySelector('#list-username');
    let getHtml = data.map((data) => {
        return `
        <li>${data.name}</li>
        <li>${data.password}</li>
        
        `;
    })
    html.innerHTML = getHtml.join('');
};