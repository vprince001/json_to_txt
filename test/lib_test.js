const { equal } = require("assert");
const { addSpaces, addRow, getStartPoint } = require("../src/lib");

describe("addSpaces", function() {
  it("should add given number of spaces to the given string if given count is more than 0", function() {
    const actualOutput = addSpaces("hello", 2);
    const expectedOutput = "hello  ";
    equal(actualOutput, expectedOutput);
  });
  it("should not add any spaces to the given string if given count is less than 1", function() {
    equal(addSpaces("hello", 0), "hello");
  });
});

describe("addRow", function() {
  it("should return keys of given obj as a string if isHeader is true", function() {
    const headers = ["Name", "EmployeeId", "Phone", "Salary"];
    const startPoints = [0, 11, 25, 44, 50];
    const isHeader = true;
    const obj = {
      Name: "Sam",
      EmployeeId: "22543",
      Phone: "88098654XX",
      Salary: "25000"
    };

    const expectedOutput = "Name       EmployeeId    Phone              Salary";
    equal(addRow(headers, startPoints, isHeader, obj), expectedOutput);
  });

  it("should return values of given obj as a string if isHeader is false", function() {
    const headers = ["Name", "EmployeeId", "Phone", "Salary"];
    const startPoints = [0, 11, 25, 44, 50];
    const isHeader = false;
    const obj = {
      Name: "Sam",
      EmployeeId: "22543",
      Phone: "88098654XX",
      Salary: "25000"
    };

    const actualOutput = addRow(headers, startPoints, isHeader, obj);
    const expectedOutput = "Sam        22543         88098654XX         25000 ";
    equal(actualOutput, expectedOutput);
  });
});

describe("getStartPoint", function() {
  it("should add 5 more than maximum length of column of given header to startPoint", function() {
    const header = "Name";
    const startPoint = 0;
    const data = [
      {
        Name: "Sam",
        EmployeeId: "22543",
        Phone: "88098654XX",
        Salary: "25000"
      },
      {
        Name: "Catherine",
        EmployeeId: "22123",
        Phone: "NULL",
        Salary: "3000"
      }
    ];

    const actualOutput = getStartPoint(header, data, startPoint);
    const expectedOutput = 14;
    equal(actualOutput, expectedOutput);
  });
});
