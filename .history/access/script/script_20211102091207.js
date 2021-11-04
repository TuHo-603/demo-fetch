let settime = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve(), ms);
    })
}


settime(1000)
    .then(() => {
        console.log(1);
        return settime(1000);
    })
    .then(() => {
        console.log(1);
        return settime(1000);
    })
    .then(() => {
        console.log(1);
        return settime(1000);
    })
    .then(() => {
        console.log(1);
        return settime(1000);
    });
.then(() => {
        console.log(1);
        return settime(1000);
    })
    .then(() => {
        console.log(1);
        return settime(1000);
    })
    .then(() => {
        console.log(1);
        return settime(1000);
    })