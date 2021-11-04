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

iterable.reduce((previous, current) => {

}, initial)

Array.prototype.reduce2 = function(callbackFunc, initialValue) {
    var i = 0;
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }

    for (; i < this.length; i++) {
        return initialValue = callbackFunc(initialValue, this[i], this);
    }
};

console.log(numbers.reduce2(function(initial, number) {
    return initial + number;
}, 0));