const o = {
    a: 1,
    b: 2,
}

Object.freeze(o)

o.a = 3
o.b = 5

console.log(o.a)
console.log(o.b)