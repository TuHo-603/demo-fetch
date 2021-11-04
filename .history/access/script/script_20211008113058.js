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

var


    Array.prototype.reduce2 = function(callbackFunc, initialValue) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }

    for (; i < this.length; i++) {
        initialValue = callbackFunc(initialValue, this[i], this);
        return initialValue;
    }
};

console.log(arr.reduce2(function(initial, course) {
    return course.coin + initial;
}, 0));