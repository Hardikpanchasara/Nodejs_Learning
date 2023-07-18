
var conn = require("./connection")
var express = require('express')
var app = express()

var body_parser = require('body-parser')
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/register.html')
});

app.post("/", function (req, res) {
    var name = req.body.name
    var email = req.body.email
    var mno = req.body.mno

    conn.connect(function (error) {
        if (error) throw error;

        // var sql = "INSERT INTO students(name,email,mno) VALUES('"+name+"','"+email+"','"+mno+"')";
        // conn.query(sql, function (error, result) {
        // var sql = "INSERT INTO students(name,email,mno) VALUES(?, ?, ?)";
        // conn.query(sql, [name,email,mno],  function (error, result) {
        var sql = "INSERT INTO students(name,email,mno) VALUES ?";
        var values = [
            [name,email,mno]
        ];
        conn.query(sql, [name,email,mno],  function (error, result) {
            if (error) throw error;
            res.send("student register successfully" + result.insertId)
        });
    });
});

app.listen(7000);