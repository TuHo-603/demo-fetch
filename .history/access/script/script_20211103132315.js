const apirequest = '  http://localhost:3000/course';

let handleData = () => {
    callData(renderDatatoHtml);
};


let callData = (data) => {
    fetch(apirequest).then((response) => {
        return response.json();
    }).then(data);
};

let renderDatatoHtml = (data) => {
    let html = document.querySelector('#list-username');
    let getHtml = data.map((data) => {
        return `
        <li>${data.id}</li>
        <li>${data.course}</li>
        <button>Xóa</button>
        `;
    })
    html.innerHTML = getHtml.join('');
};
handleData();