Array.prototype.reduce2 = function(callbackfunc, initialValue) {
    if (arguments < 2) {
        initialValue = this[0];
        i = 1;
    }
    for (const i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            const element = callbackfunc(initialValue, this[i], i, this);
        }
    }
    return element;
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
let repair = methodmap.reduce2(function(, index) {
    return
});
console.log(repair)