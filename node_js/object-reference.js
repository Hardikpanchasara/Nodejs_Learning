const obj1 = {
    name : "obj1"
}

// const obj2 = obj1
// obj2.name = "obj2" // this make change in both 
let obj2 = obj1
obj2 = {
    name : "obj2"
} // reassignment doesn't make change

console.log(obj1)