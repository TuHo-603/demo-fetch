let getAtag = document.querySelector('a');

getAtag.onclick = (e) => {
    console.log((Math.random() * 10000).toFixed());
}


console.log(getAtag.style.width);