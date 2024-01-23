require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
// const mysql = require("mysql");
const cors = require("cors");
const cookiesParser = require("cookie-parser")
// const EmployeeModel = require("./model/employee");
require("./db/conn");
const router = require("./routes/router");
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookiesParser())
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydata",
//   connectionLimit: 10,
// });

// mongoose.connect("mongodb://192.168.147.57:27017/mydb")
//   .then(() => {
//     console.log("mongoose connected");
//   })
//   .catch(() => {
//     console.log("failed");
//   });

// for checking sqldb coonection
// connection.connect((error) => {
//   if (error) {
//     console.log("error");
//   } else {
//     console.log("connected");
//   }
// });

// to display the data from sql server
// const sql = "SELECT * FROM employee";
// connection.query(sql, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// for post login page data to database
// app.post("/login", async (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   connection.query(
//     "SELECT * FROM employee WHERE Email = ? AND Password = ?",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result) {
//         res.send(result);
//         res.send({ message: "You logged in" });
//       } else {
//         res.send({ message: "Wrong combination" });
//       }
//     }
//   );
// });

// const sql = "INSERT INTO users('Name', 'Email', 'Password') VALUES(?)";
//   const values = [req.body.name, req.body.email, req.body.password];
//   con.query(sql,[values], (err, data) => {
//     if (err) return res.json(err);
//       return res.json(data);
//   });

// for post register page data to database
// app.post("/register", async (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   connection.query(
//     "INSERT INTO employee (Name, Email, Password) VALUES (?,?,?)",
//     [name, email, password],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//       res.send("registeration successful");
//     }
//   );
// });

// app.post("/register", (req, res) => {
//   EmployeeModel.create(req.body)
//     .then((employees) => res.json(employees))
//     .catch((err) => res.json(err));
// });
