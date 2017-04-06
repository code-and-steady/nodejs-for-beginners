function add(a, b) {
    return a + b
}

var v1 = 1
var v2 = 2

console.log('{v1} + {v2} = {res}'
    .replace('{v1}', v1)
    .replace('{v2}', v2)
    .replace('{res}', add(v1, v2))
)