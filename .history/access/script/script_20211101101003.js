let getAtag = document.querySelector('a');




getAtag.addEventListener('click', (e) => {
    console.log((Math.random() * 10).toFixed());

});
setTimeout(() => {
    getAtag.addEventListener('click', (e) => {
        console.log((Math.random() * 10).toFixed());
    });
}, 3000);


console.log(getAtag.style.width);