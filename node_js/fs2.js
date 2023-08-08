const fs = require("node:fs")
const zlib = require("zlib") 
const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./read.txt", {
    encoding: "utf-8",
    highWaterMark : 2 ,
})


readableStream.pipe(gzip).pipe(fs.WriteStream("./file.txt.gz"))
const writeableStream = fs.createWriteStream("./write.txt")


// readableStream.on("data", (chunk) => {
//     console.log(chunk) ;
//     writeableStream.write(chunk) ;
// });