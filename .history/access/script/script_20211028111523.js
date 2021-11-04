Array.prototype.map2 = function(callbackfunc) {
    let element = {};
    for (let i = 0; i < this.length; i++) {
        element = callbackfunc(this[i], i, this);
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
methodmap.map2(function(elements, index) {
    return {
        name:
    };
});