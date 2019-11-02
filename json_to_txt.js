const fs = require("fs");
const { getStartPoints, getRows } = require("./src/lib.js");
const FORMAT = "utf8";

const main = function (filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, FORMAT));
  const headers = Object.keys(data[0]);
  const startPoints = getStartPoints(data, headers);
  let rows = getRows(data, headers, startPoints);
  return rows.join("\n");
};

module.exports = main;
