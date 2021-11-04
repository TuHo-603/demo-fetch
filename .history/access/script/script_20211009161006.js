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
    var element = [];
    for (var i = 0; i < this.length; i++) {
        element[i] = callbackFunc(this[i], i);
    }
    return element;
};

console.log(arr.map2(function(array, index) {
    return {
        course: ''
        array.course
    };
}));