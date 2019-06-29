const WS = " ";

const addSpaces = function(string, spaceCount) {
  for (let index = 0; index < spaceCount; index++) {
    string += WS;
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

const getStartPoint = function(header, data, startPoint) {
  let lengths = [header.length];
  data.forEach(obj => {
    lengths.push(obj[header].length);
  });
  startPoint += Math.max(...lengths) + 5;
  return startPoint;
};

module.exports = { addSpaces, addRow, getStartPoint };
