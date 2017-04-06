var add = (a, b, c) => a + b + c
var inc = a => a + 1 
var only7 = () => 7
var error = (err, data) => {
    if(err) {
        console.error(err)
    } 
    return data.toString()
}
var tuple = (a, b) => ({
    first: a,
    second: b,
})


console.log(add(1, 2, 3))
console.log(inc(3))
console.log(only7())
console.log(error(null, "abc"))
console.log(tuple(4, 5))