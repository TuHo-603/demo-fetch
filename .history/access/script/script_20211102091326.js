let settime = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve(), ms);
    })
}


settime(1000)
    .then(() => {
        console.log(1);
        return settime(5000);
    })
    .then(() => {
        console.log(2);
        return settime(1000);
    })
    .then(() => {
        console.log(3);
        return settime(1000);
    })
    .then(() => {
        console.log(4);
        return settime(1000);
    })
    .then(() => {
        console.log(5);
        return settime(1000);
    })
    .then(() => {
        console.log(6);
        return settime(1000);
    })
    .then(() => {
        console.log(7);
        return settime(1000);
    });