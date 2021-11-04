Array.prototype.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this))
            return false;
    }
    return true;
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
let repair = numbers.every2((number, index) => {
    console.log(index);
    return number == 4;
});
console.log(repair);