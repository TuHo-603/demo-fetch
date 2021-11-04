Array.prototype.every2 = (callBackFunc) => {
    let element;
    for (const i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            let result = callBackFunc(this[i], i);
            if (result === true) {
                element = this[i];
            }
        }
    }
    return element;
};

let methodmap = [{
        name: 'lewis',
        age: 18
    },
    {
        name: 'lewis 1',
        age: 12
    },
    {
        name: 'lewis 2',
        age: 13
    },
];
let numbers = [1, 2, 3, 4, 5];
let repair = numbers.every2((number, index) => {
    console.log(index);
    return number === 3;
});
console.log(repair);