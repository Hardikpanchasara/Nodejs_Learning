const http = require("http")

const server = http.createServer((req, res) => {
    const data = {
        firstname : "hardik" ,
        lastname : "Panchasara"
    }
    res.writeHead(200 , { "Content-Type" : "application/json"})
    res.end(JSON.stringify(data))
})

server.listen(3000 , () => {
    console.log("server are connected successfully")
})