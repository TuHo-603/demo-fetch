Array.prototype.every2 = (callBackFunc) => {
    for (const i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            let element = callBackFunc(this[i], index);
        }
        return element;
    }
}

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
let repair = methodmap.reduce2(function(accumulator, current, index) {
    return accumulator + current.age;
}, 0);
console.log(repair);