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
        coin: 12
    }
];

var numbers = [0, 5, 2, 6, 1, 9];


Array.prototype.find2 = function(callbackFunc) {
    var result;
    for (var i = 0; i < this.length; i++) {
        if (callbackFunc(this[i], i) === true) {
            result
        };
    }
    return result;
};

console.log(arr.find(function(array, index) {
    return array.coin = 12;
}));