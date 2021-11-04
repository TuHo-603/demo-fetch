Array.prototype.map2 = function(callbackfunc) {
    let element;
    for (let i = 0; i < this.length; i++) {
        element = callbackfunc(this[i], i, this);
    }
    return element;
}

let methodmap = [];
methodmap.map2(function);