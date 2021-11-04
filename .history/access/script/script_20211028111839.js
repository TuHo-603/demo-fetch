Array.prototype.map2 = function(callbackfunc) {
    let element;
    for (let i = 0; i < this.length; i++) {
        element[i] = callbackfunc(this[i], i, this);
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
let repair = methodmap.map2(function(elements, index) {
    return {
        name: `tui ten la ${elements.name}`,
        age: `tuoi: ${elements.age}`
    };
});
console.log(repair)