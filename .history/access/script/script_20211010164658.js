function xyz() {
    let boxHTMLCollection = document.getElementsByClassName('box');
    console.log(boxHTMLCollection);
    let box1Element = boxHTMLCollection[1];
    console.log(box1Element);
    let box2Element = boxHTMLCollection[2];
    let allItemElements = document.getElementsByTagName('li');
    let box1ItemElements = document.getElementsByClassName('container:first-child box item');
    let box2ItemElements = document.getElementsByClassName('container:last-child item');
}
xyz();