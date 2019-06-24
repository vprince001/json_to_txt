const fs = require("fs");

const getStartPoints = function(data, headers) {
  let startPoints = [0];
  let startPoint = 0;

  headers.forEach(header => {
    let lengths = [header.length];
    data.forEach(obj => {
      lengths.push(obj[header].length);
    });
    startPoint += Math.max(...lengths) + 5;
    startPoints.push(startPoint);
  });

  return startPoints;
};

const addSpaces = function(string, spaceCount) {
  for (let index = 0; index < spaceCount; index++) {
    string += " ";
  }
  return string;
};

const addRow = function(headers, startPoints, isHeader, obj) {
  let row = "";
  headers.forEach((header, index) => {
    row += isHeader ? header : obj[header];
    let spaceCount = startPoints[index + 1] - row.length;
    row = addSpaces(row, spaceCount);
  });
  return row;
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
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const headers = Object.keys(data[0]);
  const startPoints = getStartPoints(data, headers);
  let rows = getRows(data, headers, startPoints);
  return rows.join("\n");
  // fs.writeFileSync("./output.txt", rows.join("\n"));
};

module.exports = jsonToTxt;
