var add = function (a, b, c) {
    return a + b + c
}

var inc = function (a) {
    return a + 1
}

var only7 = function () {
    return 7
}

var error = function(err, data) {
    if(err) {
        console.error(err)
    } 
    return data.toString()
}

var tuple = function (a, b) {
    return {
        first: a,
        second: b,
    }
}

console.log(add(1, 2, 3))
console.log(inc(3))
console.log(only7())
console.log(error(null, "abc"))
console.log(tuple(4, 5))