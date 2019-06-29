const fs = require("fs");
const { addRow, getStartPoint } = require("./src/lib.js");
const FORMAT = "utf8";

const getStartPoints = function(data, headers) {
  let startPoints = [0];
  let startPoint = 0;

  headers.forEach(header => {
    startPoint = getStartPoint(header, data, startPoint);
    startPoints.push(startPoint);
  });

  return startPoints;
};

const getRows = function(data, headers, startPoints) {
  let rows = [];
  rows.push(addRow(headers, startPoints, true));
  data.forEach(obj => {
    rows.push(addRow(headers, startPoints, false, obj));
  });
  return rows;
};

const jsonToTxt = function(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, FORMAT));
  const headers = Object.keys(data[0]);
  const startPoints = getStartPoints(data, headers);
  let rows = getRows(data, headers, startPoints);
  return rows.join("\n");
};

module.exports = jsonToTxt;
