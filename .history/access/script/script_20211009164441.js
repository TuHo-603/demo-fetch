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
    for (const key in this) {
        var i =
            result = callbackFunc(key, )
    }
    return result;
};

console.log(numbers.find(function(numbers, index) {
    return numbers[2];
}));