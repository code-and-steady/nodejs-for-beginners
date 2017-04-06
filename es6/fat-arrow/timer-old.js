function timer() {
    this.second = 0

    var self = this
    setInterval(function() {
        self.second++
        console.log(self.second + " seconds have passed.")
    }, 1000)
}

timer()