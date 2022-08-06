const fs = require("fs");
const readline = require("readline");
const path = require("path");
const _ = require("lodash");
const os = require("os");

const trimDataPool = [];
const meaningPool = [];

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(path.join(__dirname, "sample.csv")),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      const trimLine = line.replace('"', "");
      let commaCount = 0;
      let lastIndex = -1;
      for (let i = 0; i < trimLine.length; i++) {
        lastIndex = i;
        if (trimLine[i] === ",") commaCount++;
        if (commaCount == 2) {
          break;
        }
      }
      if (lastIndex !== trimLine.length - 1) {
        trimDataPool.push(trimLine.substring(0, lastIndex));
        meaningPool.push(trimLine.substring(0, lastIndex).split(",")[1]);
      }
    });

    rl.on("close", () => {
      const resultList = [];
      for (let d of trimDataPool) {
        d += `,${getRandomInt(10) + 1}과`;
        resultList.push(d);
      }
      const toBeWritten = resultList.filter((x) => x.split(",")[1].length > 0);

      const outputList = { result: [] };

      for (const r of toBeWritten) {
        const d = r.split(",");
        outputList.result.push({
          spell: d[0],
          meaning: d[1],
          chapter: d[2],
        });
      }
      fs.writeFile(
        path.join(__dirname, "input.json"),
        JSON.stringify(outputList, null, 2),
        (err) => {
          if (err) {
            console.error(err);
          }
          // file written successfully
        }
      );
    });
  } catch (err) {
    console.error(err);
  }
})();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
