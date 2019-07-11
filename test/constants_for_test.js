const JSON_DATA = [
  {
    FIRST_NAME: "Debra",
    LAST_NAME: "Burks",
    NUMBER: "880012XXXX",
    EMAIL: "debra.burks@yahoo.com",
    ADDRESS: "9273 Thome Ave., Orchard Park, NY - 14127"
  },
  {
    FIRST_NAME: "Kasha",
    LAST_NAME: "Todd",
    NUMBER: "NULL",
    EMAIL: "kasha.todd@yahoo.com",
    ADDRESS: "910, Vine Street, Campbell, CA - 95008"
  }
];

const HEADERS = Object.keys(JSON_DATA[0]);
const OBJ1 = JSON_DATA[0];
const OBJ2 = JSON_DATA[1];

const START_POINTS = [0, 15, 29, 44, 70, 116];

const STRING_HEADERS_LINE =
  "FIRST_NAME     LAST_NAME     NUMBER         EMAIL                     ADDRESS                                       ";

const STRING_FIRST_LINE =
  "Debra          Burks         880012XXXX     debra.burks@yahoo.com     9273 Thome Ave., Orchard Park, NY - 14127     ";

const STRING_SECOND_LINE =
  "Kasha          Todd          NULL           kasha.todd@yahoo.com      910, Vine Street, Campbell, CA - 95008        ";

const FINAL_RESULT_ARRAY = [
  STRING_HEADERS_LINE,
  STRING_FIRST_LINE,
  STRING_SECOND_LINE
];

module.exports = {
  JSON_DATA,
  HEADERS,
  OBJ1,
  OBJ2,
  START_POINTS,
  STRING_HEADERS_LINE,
  STRING_FIRST_LINE,
  STRING_SECOND_LINE,
  FINAL_RESULT_ARRAY
};
