let getAtag = document.querySelector('a');

getAtag.onchange = (e) => {
    console.log(Math.random() * 10);
}


console.log(getAtag.style.width);