const fs = require("fs");

fs.readFile("NAVIvsVitaGF.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
  }

  const getKills = (player) => {
    const regex = new RegExp(`\\b${player}\\b.*killed(?!.*other)\\b`, "g");
    const killsRegexMatch = [...data.matchAll(regex)];
    console.log(
      "Player " +
        player +
        " has killed " +
        killsRegexMatch.length +
        " opponents"
    );
  };

  const getDeaths = (player) => {
    const regex = new RegExp(`killed\\s+".*${player}.*"`, "g");
    const deathsRegexMatch = [...data.matchAll(regex)];
    console.log(
      "Player " +
        player +
        " has been killed for " +
        deathsRegexMatch.length +
        " times during this match"
    );
  };

  getKills("s1mple");
  getDeaths("s1mple");
});
