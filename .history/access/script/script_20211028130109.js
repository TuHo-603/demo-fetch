Array.prototype.every2 = (callBackFunc) => {
    for (const i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            if (!callBackFunc(this[i], i)) {
                return false;
            }
        }
    }
    return true;
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
let repair = numbers.every2((number) => {
    return number === '7';
});
console.log(repair);