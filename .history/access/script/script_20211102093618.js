let promise1 = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve('Success!');
        }, 2000);
    }
);
let promise2 = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve('Done!');
        }, 4000);
    }
);


Promise.all(promise1, promise2)
    .then(([promise1, promise2]) => {
        return promise1.concat(promise2);
    });