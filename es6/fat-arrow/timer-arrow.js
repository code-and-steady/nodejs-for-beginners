function timer() {
    this.second = 0

    setInterval(() => {
        this.second++
        console.log(this.second + " seconds have passed.")
    }, 1000)
}

timer()