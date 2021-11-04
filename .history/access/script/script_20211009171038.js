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
    for (let = 0; < array.length; ++) {
        result = callbackFunc(key, index)

    }
    return result;
};

console.log(arr.find2(function(array, index) {
    return array.coin = 5;
}));