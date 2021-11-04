let getAtag = document.querySelector('a');

getAtag.onclick = (e) => {
    console.log(e.target.screen);
}


console.log(getAtag.style.width);