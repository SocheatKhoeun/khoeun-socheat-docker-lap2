const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Before
  // res.send("Hello from Docker!");
  // After
  res.send("Updated version from Docker!");
});

app.listen(3000, () => console.log("Running on port 3000"));
