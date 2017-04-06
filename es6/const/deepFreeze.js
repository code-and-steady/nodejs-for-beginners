var deepFreeze = require('deep-freeze')

var o = {
    a: 1,
    b: 2,
    c: {
        f: 3,
    },
}

o = deepFreeze(o)

o.c.f = 4
o.c.g = 5

console.log(o.c.f)
console.log(o.c.g)