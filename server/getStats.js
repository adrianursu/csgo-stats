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

  const getAssists = (player) => {
    const regex = new RegExp(`\\b${player}\\b.*assisted killing`, "g");
    const assistsRegexMatch = [...data.matchAll(regex)];
    console.log(
      "Player " +
        player +
        " has assisted in killing of " +
        assistsRegexMatch.length +
        " opponents"
    );
  };

  getKills("s1mple");
  getDeaths("s1mple");
  getAssists("s1mple");
});
