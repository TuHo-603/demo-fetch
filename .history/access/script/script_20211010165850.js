function xyz() {
    let boxHTMLCollection = document.getElementsByClassName('box');
    console.log(boxHTMLCollection);
    let box1Element = boxHTMLCollection[0];
    console.log(box1Element);
    let box2Element = boxHTMLCollection[1];
    console.log(box2Element);
    let allItemElements = document.getElementsByTagName('li');
    console.log(allItemElements);
    let box1ItemElements = document.querySelector('.container:first-child .box');
    console.log(box1ItemElements)
    let box2ItemElements = document.getElementsByClassName('.container:last-child .box');
    console.log(box2ItemElements);
}
xyz();