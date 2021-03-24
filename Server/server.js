// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/posts.js");
const app = express();
const db = mongoose.connection;

// Express
app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);

// DB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("🌐🌐🌐 Connected to Database."));

// Connect to localhost
app.listen(process.env.PORT, () =>
  console.log(
    "🌎🌎🌎 Server Started. Listening on http://localhost:" + process.env.PORT
  )
);
