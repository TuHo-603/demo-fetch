let getAtag = document.querySelector('a');

getAtag.onclick = (e) => {
    console.log((Math.random().toFixed() * 10000));
}


console.log(getAtag.style.width);