let getAtag = document.querySelector('a');

getAtag.onclick = (e) => {
    console.log(e.target);
}


console.log(getAtag.style.width);