function xyz() {
    let boxHTMLCollection = document.getElementsByClassName('box');
    console.log(boxHTMLCollection);
    let box1Element = boxHTMLCollection[1];
    console.log(box1Element);
    let box2Element = boxHTMLCollection[2];
    console.log(box2Element);
    let allItemElements = document.getElementsByTagName('li');


}
xyz();