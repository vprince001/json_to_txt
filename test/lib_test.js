const { equal, deepEqual } = require("assert");
const { addSpaces, addRow } = require("../src/lib");

describe("addSpaces", function() {
  it("should add given number of spaces to the given string if given count is more than 0", function() {
    equal(addSpaces("hello", 2), "hello  ");
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

    const expectedOutput = "Sam        22543         88098654XX         25000 ";
    equal(addRow(headers, startPoints, isHeader, obj), expectedOutput);
  });
});
