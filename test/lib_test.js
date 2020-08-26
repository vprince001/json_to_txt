const {strictEqual, deepStrictEqual} = require("assert");

const {
  JSON_DATA,
  HEADERS,
  OBJ1,
  START_POINTS,
  STRING_HEADERS_LINE,
  STRING_FIRST_LINE,
  FINAL_RESULT_ARRAY,
  fs,
  JSON_DATA_OBJ,
  HEADERS_OBJ,
  OBJ1_OBJ,
  START_POINTS_OBJ,
  STRING_FIRST_LINE_OBJ,
  FINAL_RESULT_ARRAY_OBJ
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
    strictEqual(actual, expected);
  });

  it("should not add any spaces to the string if count is less than 1", function () {
    const actual = addSpaces("hello", 0);
    const expected = "hello";
    strictEqual(actual, expected);
  });
});

describe("getRow", function () {
  it("should return keys of given obj as a string if isHeader is true", function () {
    const actual = getRow(HEADERS, START_POINTS, true, OBJ1);
    const expected = STRING_HEADERS_LINE;
    strictEqual(actual, expected);
  });

  it("should return values of given obj as a string if isHeader is false", function () {
    const actual = getRow(HEADERS, START_POINTS, false, OBJ1);
    const expected = STRING_FIRST_LINE;
    strictEqual(actual, expected);
  });

  it("should return values of given obj as a string if isHeader is false and value is an object", function () {
    const actual = getRow(HEADERS_OBJ, START_POINTS_OBJ, false, OBJ1_OBJ);
    const expected = STRING_FIRST_LINE_OBJ;
    strictEqual(actual, expected);
  });
});

describe("getRows", function () {
  it("should return an array of all rows", function () {
    const actual = getRows(JSON_DATA, HEADERS, START_POINTS);
    const expected = FINAL_RESULT_ARRAY;

    deepStrictEqual(actual, expected);
  });

  it("should return an array of all rows with object as values", function () {
    const actual = getRows(JSON_DATA_OBJ, HEADERS_OBJ, START_POINTS_OBJ);
    const expected = FINAL_RESULT_ARRAY_OBJ;

    deepStrictEqual(actual, expected);
  });
});

describe("getStartPoint", function () {
  it("should add 5 more than maximum length of column for given header", function () {
    const header = "FIRST_NAME";
    const startPoint = 0;

    const actual = getStartPoint(header, JSON_DATA, startPoint);
    const expected = 15;
    strictEqual(actual, expected);
  });

  it("should add 5 more than maximum length of column for given header with object values", function () {
    const header = "NAME";
    const startPoint = 0;

    const actual = getStartPoint(header, JSON_DATA_OBJ, startPoint);
    const expected = 47;
    strictEqual(actual, expected);
  });
});

describe("getStartPoints", function () {
  it("should return all start points", function () {
    const actual = getStartPoints(JSON_DATA, HEADERS);
    const expected = START_POINTS;

    deepStrictEqual(actual, expected);
  });

  it("should return all start points when values contain objects", function () {
    const actual = getStartPoints(JSON_DATA_OBJ, HEADERS_OBJ);
    const expected = START_POINTS_OBJ;

    deepStrictEqual(actual, expected);
  });
});

describe("getData", function () {
  it("should return JSON data if filePath is given", function () {
    const actual = getData({ filePath: "./data.json" }, fs);
    const expected = JSON_DATA;

    deepStrictEqual(actual, expected);
  });

  it("should return JSON data if JSON data is given", function () {
    const actual = getData({ data: JSON_DATA });
    const expected = JSON_DATA;

    deepStrictEqual(actual, expected);
  });
});
