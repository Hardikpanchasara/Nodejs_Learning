
var conn = require("./connection")
var express = require('express')
var app = express()

var body_parser = require('body-parser')
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/register.html')
});


//post data in mysql
app.post("/", function (req, res) {
    var name = req.body.name
    var email = req.body.email
    var mno = req.body.mno

    conn.connect(function (error) {
        if (error) throw error;

        // var sql = "INSERT INTO students(name,email,mno) VALUES('"+name+"','"+email+"','"+mno+"')";
        // conn.query(sql, function (error, result) {

        // var sql = "INSERT INTO students(name,email,mno) VALUES(?, ?, ?)";
        // conn.query(sql, [name, email, mno], function (error, result) {

        var sql = "INSERT INTO students(name,email,mno) VALUES ? ";
        var values = [
            [name, email, mno]
        ]
        conn.query(sql, [values], function (error, result) {
            if (error) throw error;
            res.redirect("/students")
            // res.send("student register successfully" + result.insertId)
        });
    });
});


//get data from mysql
app.get("/students", function (req, res) {
    conn.connect(function (error) {
        if (error) console.log(error);
        var sql = "select * from students"
        conn.query(sql, function (error, result) {
            if (error) console.log(error);
            res.render(__dirname + '/students.ejs', { students: result });
        })
    })
})

//delete data in mysql
app.get("/delete-student", function (req, res) {
    conn.connect(function (error) {
        if (error) console.log(error);
        var sql = "delete from students where id=?"
        var id = req.query.id;
        conn.query(sql, [id], function (error, result) {
            if (error) console.log(error);
            res.redirect("/students")
        })
    })
})

//update data in mysql

app.get("/update-student", function (req, res) {
    conn.connect(function (error) {
        if (error) console.log(error);
        var sql = "select * from students where id=?"
        var id = req.query.id;
        conn.query(sql, [id], function (error, result) {
            if (error) console.log(error);
            res.render(__dirname + '/update-student.ejs', { students: result });
        })
    })
})

app.post("/update-student", function (req, res) {
    var name = req.body.name
    var email = req.body.email
    var mno = req.body.mno
    var id = req.body.id
    conn.connect(function (error) {
        if (error) console.log(error);
        var sql = "UPDATE students set name=?, email=?, mno=? where id=?"
        console.log(name,email , mno ,id);

        conn.query(sql, [name , email , mno , id], function (error, result) {
            if (error) console.log(error);
            res.redirect("/students")
        })
    })
})

// for serch bar 
app.get("/students", function (req, res) {
    conn.connect(function (error) {
        if (error) console.log(error);
        var sql = "select * from students"
        conn.query(sql, function (error, result) {
            if (error) console.log(error);
            res.render(__dirname + '/students.ejs', { students: result });
        })
    })
})
 
app.get("/search", function (req, res) {
    var name = req.query.name
    var email = req.query.email
    var mno = req.query.mno
    conn.connect(function (error) {
        if (error) console.log(error);
        var sql = "SELECT * from students where name LIKE '%"+name+"%' AND email LIKE '%"+email+"%' AND mno LIKE '%"+mno+"%'";
        conn.query(sql, function (error, result) {
            if (error) console.log(error);
            res.render(__dirname + '/students.ejs', { students: result });
        })
    })
})

app.listen(7000);

