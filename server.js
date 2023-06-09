const mongoose = require("mongoose");
const app = require("./app");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });


mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, maxPoolSize: 100, minPoolSize: 2 },
  () => {
    console.log("Connected to DataBase...");
  }
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}...`));
