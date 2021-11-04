let getAtag = document.querySelector('a');

getAtag.onclick = (e) => {
    console.log(e.target.screenX);
}


console.log(getAtag.style.width);