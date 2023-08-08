const fs = require("node:fs/promises")

// console.log("first")

// fs.readFile("write.txt" , "utf-8").then((data) => console.log(data)).catch((err) => console.log(err))

// console.log("second")

async function readfile() {
    try {
        const data = await fs.readFile("write.txt" , "utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readfile()




// const fs = require('fs')

// console.log("first")
// const filecontents = fs.readFileSync("./data.json", "utf-8")
// console.log(filecontents)
// console.log("second")
// fs.readFile("./data.json", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })
// console.log("third")

// fs.writeFileSync("./write.txt", "utf-8")
// fs.writeFile("./write.txt", " hello world", {flag : "a"} , (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("written successfully")
//     }
// })