const apirequest = '  http://localhost:3000/course';

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

let handleDatatoHtml = (data) => {
    let getInput = document.querySelector('#create');
    getInput.onclick = (e) => {
        let getInputId = document.querySelector('input[name="name-input-id"]').value;
        let getInputcourse = document.querySelector('input[name="name-input-course"]').value;
        let formData = {
            id: getInputId,
            course: getInputcourse
        };
        createDatatoHtml(formData);
    };
};

let createDatatoHtml = (data, callback) => {
    fetch(apirequest, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        response.json();
    }).then((callback));
};


let handleData = () => {
    callData(renderDatatoHtml);
    handleDatatoHtml();
};


handleData();