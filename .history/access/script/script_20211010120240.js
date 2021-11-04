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
        coin: 15
    }
];

var numbers = [0, 5, 2, 6, 1, 9];


Array.prototype.find2 = function(callbackFunc) {
    var result;
    for (let i = 0; i < this.length; i++) {
        result = callbackFunc(this[i], i, this);
        if (result === true) {
            result = this[i];
            break;
        } else {
            result = undefined;
            continue;
        }
    }
    return result;
};

console.log(arr.find2(function(array, index) {
    console.log(object);
    return array.coin === 12;

}));