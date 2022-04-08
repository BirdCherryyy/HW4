let arr = [
    {
        Name : 'Milk',
        Price : 80
    },
    
    {
        Name : 'Water',
        Price : 48
    },

    {
        Name : 'Bread',
        Price : 38
    }
];

Array.prototype.sum = function (prop) {
    let total = 0
    for ( let i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

console.log(arr.sum("Price"));