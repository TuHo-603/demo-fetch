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
    let htmls = data.map((data) => {
        return `
        
        
        
        `;
    })
};