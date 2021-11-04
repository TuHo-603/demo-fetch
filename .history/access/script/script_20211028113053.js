Array.prototype.reduce2 = function(callbackfunc, initialValue) {

    for (const i in this) {
        if (Object.hasOwnProperty.call(this, i)) {
            const element = this[i];

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