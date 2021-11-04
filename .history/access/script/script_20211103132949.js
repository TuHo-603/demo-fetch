const apirequest = '  http://localhost:3000/course';

let handleData = () => {
    callData(renderDatatoHtml);
    handleCreateDatatoHtml();
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
    });
    html.innerHTML = getHtml.join('');
};

let handleCreateDatatoHtml = (data) => {
    let getInput = document.querySelector('#create');
    getInput.onclick = (e) => {
        let getInputId = document.querySelector('input[name="name-input-id"]');
        let getInputcourse = document.querySelector('input[name="name-input-course"]');
        console.log(getInputId);
    }
};




handleData();