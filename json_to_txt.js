const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

const headers = Object.keys(data[0]);

let startPoints = [0];
let startPoint = 0;

for (let headersIndex = 0; headersIndex < headers.length; headersIndex++) {
  let header = headers[headersIndex];
  let lengths = [header.length];
  for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
    let obj = data[dataIndex];
    let value = obj[header];
    let valueLength = value.length;
    lengths.push(valueLength);
  }
  startPoint += Math.max(...lengths) + 5;
  startPoints.push(startPoint);
}

const addSpaces = function(string, spaceCount) {
  for (let index = 0; index < spaceCount; index++) {
    string += " ";
  }
  return string;
};

let lines = [];

const addHeaderLine = function() {
  let line = "";
  for (let headersIndex = 0; headersIndex < headers.length; headersIndex++) {
    let header = headers[headersIndex];
    line += header;
    let spaceCount = startPoints[headersIndex + 1] - line.length;
    line = addSpaces(line, spaceCount);
  }
  lines.push(line);
};

addHeaderLine();

for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
  let obj = data[dataIndex];
  let line = "";
  for (let headersIndex = 0; headersIndex < headers.length; headersIndex++) {
    let header = headers[headersIndex];
    let value = obj[header];
    line += value;
    let spaceCount = startPoints[headersIndex + 1] - line.length;
    line = addSpaces(line, spaceCount);
  }
  lines.push(line);
}

let finalData = lines.join("\n");

fs.writeFileSync("./output.txt", finalData);
