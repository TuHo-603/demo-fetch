var arr = [
    {
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


Array.prototype.map2 = function(callback) {
    for (let i = 0; i < this.length; i++) 
    {
        if (this[i] == callback())
        {
            return callback(this,this[i]);
        }
        else
        {
            return [];
        }
    }
};

console.log(arr.map2(function(arr){
    return arr.coin = 12;
}));
