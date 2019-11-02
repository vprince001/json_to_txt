const { equal, deepEqual } = require("assert");

const {
  JSON_DATA,
  HEADERS,
  OBJ1,
  START_POINTS,
  STRING_HEADERS_LINE,
  STRING_FIRST_LINE,
  FINAL_RESULT_ARRAY,
  fs
} = require("./constants_for_test");

const {
  addSpaces,
  getRow,
  getRows,
  getStartPoint,
  getStartPoints,
  getData
} = require("../src/lib");


describe("addSpaces", function () {
  it("should add given number of spaces to the string if count is more than 0", function () {
    const actual = addSpaces("hello", 2);
    const expected = "hello  ";
    equal(actual, expected);
  });

  it("should not add any spaces to the string if count is less than 1", function () {
    const actual = addSpaces("hello", 0);
    const expected = "hello";
    equal(actual, expected);
  });
});

describe("getRow", function () {
  it("should return keys of given obj as a string if isHeader is true", function () {
    const actual = getRow(HEADERS, START_POINTS, true, OBJ1);
    const expected = STRING_HEADERS_LINE;
    equal(actual, expected);
  });

  it("should return values of given obj as a string if isHeader is false", function () {
    const actual = getRow(HEADERS, START_POINTS, false, OBJ1);
    const expected = STRING_FIRST_LINE;
    equal(actual, expected);
  });
});

describe("getRows", function () {
  it("should return an array of all rows", function () {
    const actual = getRows(JSON_DATA, HEADERS, START_POINTS);
    const expected = FINAL_RESULT_ARRAY;

    deepEqual(actual, expected);
  });
});

describe("getStartPoint", function () {
  it("should add 5 more than maximum length of column of given header to startPoint", function () {
    const header = "FIRST_NAME";
    const startPoint = 0;

    const actual = getStartPoint(header, JSON_DATA, startPoint);
    const expected = 15;
    equal(actual, expected);
  });
});

describe("getStartPoints", function () {
  it("should return all startpoints", function () {
    const actual = getStartPoints(JSON_DATA, HEADERS);
    const expected = START_POINTS;

    deepEqual(actual, expected);
  });
});

describe("getData", function () {
  it("should return JSON data if filePath is given", function () {
    const actual = getData({ filePath: "./data.json" }, fs);
    const expected = JSON_DATA;

    deepEqual(actual, expected);
  });

  it("should return JSON data if JSON data is given", function () {
    const actual = getData({ data: JSON_DATA });
    const expected = JSON_DATA;

    deepEqual(actual, expected);
  });
});
