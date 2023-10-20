const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydata",
  connectionLimit: 10,
});

// for checking sqldb coonection
// con.connect((error) =>{
//   if(error){
//     console.log('error')
//   }else{
//     console.log('connected')
//   }
// })


// to display the data from sql server
// const sql = "SELECT * FROM employee";
// con.query(sql, (err, data) => {
//     if (err) {
//       console.log(err) ;
//     }else{
//         console.log(data);
//     }
//   });

// app.get("/users", (req, res) => {
//   const sql = "SELECT * FROM employee";
//   con.query(sql, (err, data) => {
//     if (err) {
//       console.log(res.json(err));
//     } else {
//       console.log(res.json(data));
//     }
//   });
// });


// const sql = "INSERT INTO users('Name', 'Email', 'Password') VALUES(?)";
//   const values = [req.body.name, req.body.email, req.body.password];
//   con.query(sql,[values], (err, data) => {
//     if (err) return res.json(err);
//       return res.json(data);
//   });

app.post("/register", (req, res) => {
  const sql = "INSERT INTO employee('Name', 'Email', 'Password') VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];
  console.log(req.body.name, req.body.email, req.body.password)
  con.query(sql,[values], (err, data) => {
    if (err) return res.json(err);
      return res.json(data);
  });
});


app.listen(3002, () => {
  console.log("running");
});
