const apirequest = '  http://localhost:3000/course';

let callData = (data) => {
    fetch(apirequest).then((response) => {
        return response.json();
    }).then(data);
};

let handleData = () => {
    callData(renderDatatoHtml);
};


let renderDatatoHtml = (data) => {
    let html = document.querySelector('#list-username');
    let getHtml = data.map((data) => {
        return `
        <li>${data.id}</li>
        <li>${data.course}</li>
        <button style="margin-left: 20rem; 
        position: absolute;
        top: 0; left: 100%
        margin-bottom: -2rem">Xoa</button>
        `;
    })
    html.innerHTML = getHtml.join('');
};
handleData();