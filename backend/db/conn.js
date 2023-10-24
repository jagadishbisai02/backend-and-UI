const mongoose = require("mongoose");
const DB ="mongodb+srv://jagadishbisai02:Jh%40nsi789@cluster0.qwxh5ln.mongodb.net/mernstack?retryWrites=true&w=majority";

//for connection to mongodbs
mongoose.connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });
