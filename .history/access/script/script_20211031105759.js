let getAtag = document.querySelector('a');


let setHref = getAtag.setAttribute('class', 'link');
getAtag.className = 'name';

let getHref = getAtag.getAttribute('class');

alert(getAtag.className);