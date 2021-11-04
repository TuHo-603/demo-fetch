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


Array.prototype.map2 = function(callbackFunc) {
    var result;
    for (var i = 0; i < this.length; i++) {
        result = callbackFunc(this[i], i);
    }
    return result;
};

console.log(arr.map2(function(array, index) {
    if (array.coin === 5) {
        return array;
    } else {
        return null;
    };
}));