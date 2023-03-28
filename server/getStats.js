const fs = require("fs");

const getKills = (player) => {
  return new RegExp(`\\b${player}\\b.*killed(?!.*other)\\b`, "g");
};

fs.readFile("NAVIvsVitaGF.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
  }

  const array = [...data.matchAll(getKills("b1t"))];
  console.log(array.length);
});
