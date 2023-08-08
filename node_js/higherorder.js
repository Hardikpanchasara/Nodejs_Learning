function greet(name) {
    console.log(`hello ${name}`)
}

function higherOrderfunc(callback) {
    const name = "hardik"
    callback(name)
}

higherOrderfunc(greet)