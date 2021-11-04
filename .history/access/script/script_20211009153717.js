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


Array.prototype.reduce2 = function(callbackFunc) {
    for (let index = ; index < i.length; index++) {
        const element = i[index];

    }
};

console.log(arr.reduce2(function(initial, array) {
    return initial + array.coin;
}, 0));