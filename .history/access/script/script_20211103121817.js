const apirequest = '  http://localhost:3000/course';

let callData = () => {
    fetch(apirequest).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
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