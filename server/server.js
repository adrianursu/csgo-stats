const express = require("express");
const app = express();

const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// const URL =
//   "https://blast-recruiting.s3.eu-central-1.amazonaws.com/NAVIvsVitaGF-Nuke.txt";
