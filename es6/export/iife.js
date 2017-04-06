// IIFE(Immediately-Invoked Function Expression) module of calc.

var calc = {}
(function(){
    calc.add = function(a, b) {
        return a + b
    }
})()