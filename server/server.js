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
      let urlData = "";

      response.on("data", (chunk) => {
        urlData += chunk;
      });

      response.on("end", () => {
        fs.readFile("NAVIvsVitaGF.txt", "utf8", (err, data) => {
          if (err) {
            fs.appendFile("NAVIvsVitaGF.txt", "", (err) => {
              if (err) throw err;
              console.log("Created File!");
            });
          }
          if (
            data ===
            urlData.substring(
              urlData.lastIndexOf('World triggered "Match_Start" on "de_nuke"')
            )
          ) {
            console.log("Data is already updated.");
            res.send("Data is already updated.");
          } else {
            fs.writeFile(
              "NAVIvsVitaGF.txt",
              urlData.substring(
                urlData.lastIndexOf(
                  'World triggered "Match_Start" on "de_nuke"'
                )
              ),
              (err) => {
                if (err) throw err;
                console.log("File has been created and data was written in it");
                res.send("File has been created and data was written in it");
              }
            );
          }
        });
      });
    })
    // eslint-disable-next-line no-unused-vars
    .on("error", (error) => {
      res.status(500).send("Error fetching URL");
    });
});

app.get("/getKills", (req, res) => {
  res.send("Get Request for kills");
});

app.get("/getAssists", (req, res) => {
  res.send("Get Request for assists");
});

app.get("/getDeaths", (req, res) => {
  res.send("Get Request for deaths");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
