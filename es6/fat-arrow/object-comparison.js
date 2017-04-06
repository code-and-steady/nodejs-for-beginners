var o1 = {
    a: 1,
    b: 2,
    add: function() {
        return this.a + this.b
    },
}

var o2 = {
    a: 1,
    b: 2,
    add: () => this.a + this.b,
}

console.log(o1.add())
console.log(o2.add())
