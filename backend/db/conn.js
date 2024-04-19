const mongoose = require("mongoose");

//mongodb connection by using mongodb compass
const DB = "mongodb://localhost:27017/Authentications";
//mongodb connection by using mongodb ATLAS
//const DB ="mongodb+srv://jagadishbisai02:Jh%40nsi789@cluster0.qwxh5ln.mongodb.net/mernstack?retryWrites=true&w=majority";

//for connection to mongodbs
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });
