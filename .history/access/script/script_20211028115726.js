Array.prototype.reduce2 = function(callbackfunc, initialValue) {
    let i = 0;
    if (arguments.length < 2) {
        initialValue = this[0];
        i = 1;
    }
    for (; i < this.length; i++) {
        initialValue = callbackfunc(initialValue, this[i], i, this);
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
let repair = methodmap.reduce2(function(accumulator, current, index) {
    return accumulator + current.age;
});
console.log(repair);