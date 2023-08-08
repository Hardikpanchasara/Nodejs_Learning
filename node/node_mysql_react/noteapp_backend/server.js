const express = require('express')
const bodyParser = require('body-parser')
const con = require("./connection")
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

con.connect(function (error) {
    if (error) {
        console.error('Error connecting to the database:', error);
        // Handle the error, e.g., stop the server or provide a fallback mechanism
    } else {
        console.log('Connected to the database!');
    }
});

//get data from mysql

app.get("/data", function (req, res) {
    var sql = "SELECT * FROM data";
    con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            res.status(500).send("Error fetching data from the database.");
        } else {
            res.send(result);
        }
    });
});

//post data in mysql
app.post("/", function (req, res) {
    var title = req.body.title;
    var content = req.body.content;

    var sql = "INSERT INTO data (title, content) VALUES (?, ?)";
    var values = [title, content];

    con.query(sql, values, function (error, result) {
        // res.release()
        if (error) {
            console.error('Error adding data:', error);
            res.status(500).send("Error adding data to the database.");
        } else {
            console.log('Data added successfully:', result);
            res.status(200).json({ message: 'Data added successfully' });
        }
    });
});

// delete data
app.delete("/data/:id", function (req, res) {
    const id = req.params.id;
    var sql = "DELETE FROM data WHERE id = ?";
    con.query(sql, [id], function (error, result) {
      if (error) {
        console.error('Error deleting data:', error);
        res.status(500).send("Error deleting data from the database.");
      } else {
        console.log('Data deleted successfully:', result);
        res.status(200).json({ message: 'Data deleted successfully' });
      }
    });
  });


const port = 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//edit data

app.put("/data/update/:id", function (req, res) {
    const id = req.params.id;
    const { title, content } = req.body;
  
    var sql = "UPDATE data SET title = ?, content = ? WHERE id = ?";
    var values = [title, content, id];
  
    con.query(sql, values, function (error, result) {
      if (error) {
        console.error('Error updating data:', error);
        res.status(500).send("Error updating data in the database.");
      } else {
        console.log('Data updated successfully:', result);
        res.status(200).json({ message: 'Data updated successfully' });
      }
    });
  });
