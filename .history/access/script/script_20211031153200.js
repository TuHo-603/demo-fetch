let getAtag = document.querySelector('a');

getAtag.oncopy = (e) => {
    console.log((Math.random() * 10000).toFixed());
}


console.log(getAtag.style.width);