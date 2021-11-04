// let getAtag = document.querySelector('a');




// getAtag.addEventListener('click', (e) => {
//     console.log((Math.random() * 10).toFixed());

// });
// setTimeout(() => {
//     getAtag.addEventListener('click', (e) => {
//         console.log((Math.random() * 10).toFixed());
//     });
// }, 3000);


// console.log(getAtag.style.width);
Object.prototype.setTimeout2 = (callback, index) => {
    let
    for (let i = 0; i < index; i++) {
        if (i === index - 1) {

            callback();
        }
    }

}

setTimeout2(() => {
    console.log(12);
}, 10000);