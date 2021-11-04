var arr = [{
        course: 'PHP',
        user: true,
        coin: 12
    },
    {
        course: 'Javascript',
        user: true,
        coin: 10
    },
    {
        course: 'Ruby',
        user: false,
        coin: 5
    },
    {
        course: 'React',
        user: true,
        coin: 20
    },
    {
        course: 'nodejs',
        user: true,
        coin: 17
    }
]

var numbers = [0, 5, 2, 6, 1, 9];


Array.prototype.reduce2 = function(callbackFunc, initial) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        initial = this[0];
    }

    for (; i < this.length; i++) {
        return initial = callbackFunc(initial, this[i], this);
    }
};

console.log(numbers.reduce2(function(initial, number) {
    return initial + number;
}));