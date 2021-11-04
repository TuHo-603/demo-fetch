Array.prototype.reduce2 = function(callbackfunc, initialValue) {
    let i;
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }
    for (i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            initialValue = callbackfunc(initialValue, this[i], i, this);
        }
    }
    return initialValue;
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
let repair = numbers.reduce2(function(accumulator, current, index) {
    return accumulator + current;
});
console.log(repair);