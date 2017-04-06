var f = a => b => c
var f2 = a => function(b) {
    return c
}
var f3 = function(a) {
    return function(b) {
        return c
    }
}