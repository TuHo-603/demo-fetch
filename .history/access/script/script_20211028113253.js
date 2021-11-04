Array.prototype.reduce2 = function(callbackfunc, initialValue) {
    if (arguments < 2) {
        initialValue = this[0]

    }
    for (const i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            const element = callbackfunc(this[i], initialValue, i, this);
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
let repair = methodmap.map2(function(elements, index) {
    return {
        name: `tui ten la ${elements.name}`,
        age: `tuoi: ${elements.age}`
    };
});
console.log(repair)