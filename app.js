const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const mysql = require("mysql2");
const pool = require("./models/db");

const app = express();
app.use(express.json());
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api", require("./routes/step.routes"));
app.use("/api", require("./routes/testCase.routes"));
const PORT = config.get("port") || 5000;
//const MONGOURI = config.get("mongoUri") || "mongodb://localhost:27017/";
//const uri =
// "mongodb+srv://root:root@cluster0.de1p8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //TODO разобраться почему не рабоатет с адресом из конфига

async function start() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

app.listen(PORT, () => console.log(`server start ${PORT}`));
