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


Array.prototype.reduce2 = function(callbackFunc,initialValue) {
    let i = 0;
    if  (arguments.length < 2){
        i = 1;
        
    }

    for (; i < this.length; i++) 
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