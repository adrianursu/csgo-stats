const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");
const app = express();
const port = 8080;
const URL =
  "https://blast-recruiting.s3.eu-central-1.amazonaws.com/NAVIvsVitaGF-Nuke.txt";

app.get("", (req, res) => {
  const protocol = URL.startsWith("https") ? https : http;

  protocol
    .get(URL, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        fs.writeFile("NAVIvsVitaGF.txt", data, (err) => {
          if (err) throw err;
          console.log("File created and data written to it!");

          fs.readFile("NAVIvsVitaGF.txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log(data);
          });
        });
      });
    })
    // eslint-disable-next-line no-unused-vars
    .on("error", (error) => {
      res.status(500).send("Error fetching URL");
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
