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
    NUMBER: null,
    EMAIL: "kasha.todd@yahoo.com",
    ADDRESS: "910, Vine Street, Campbell, CA - 95008"
  }
];

const HEADERS = Object.keys(JSON_DATA[0]);
const OBJ1 = JSON_DATA[0];

const START_POINTS = [0, 15, 29, 44, 70, 116];

const STRING_HEADERS_LINE =
  "FIRST_NAME     LAST_NAME     NUMBER         EMAIL                     ADDRESS                                       ";

const STRING_FIRST_LINE =
  "Debra          Burks         880012XXXX     debra.burks@yahoo.com     9273 Thome Ave., Orchard Park, NY - 14127     ";

const STRING_SECOND_LINE =
  "Kasha          Todd          null           kasha.todd@yahoo.com      910, Vine Street, Campbell, CA - 95008        ";

const FINAL_RESULT_ARRAY = [
  STRING_HEADERS_LINE,
  STRING_FIRST_LINE,
  STRING_SECOND_LINE
];

const JSON_DATA_OBJ = [
  {
    NAME: {FIRST_NAME: "Debra", LAST_NAME: "Burks"},
    NUMBER: "880012XXXX",
    EMAIL: "debra.burks@yahoo.com",
    ADDRESS: "9273 Thome Ave., Orchard Park, NY - 14127"
  },
  {
    NAME: {FIRST_NAME: "Kasha", LAST_NAME: "Todd"},
    NUMBER: null,
    EMAIL: "kasha.todd@yahoo.com",
    ADDRESS: "910, Vine Street, Campbell, CA - 95008"
  }
];

const HEADERS_OBJ = Object.keys(JSON_DATA_OBJ[0]);
const OBJ1_OBJ = JSON_DATA_OBJ[0];

const START_POINTS_OBJ = [0, 47, 62, 88, 134];

const STRING_HEADERS_LINE_OBJ =
    "NAME                                           NUMBER         EMAIL                     ADDRESS                                       ";

const STRING_FIRST_LINE_OBJ =
    `{ FIRST_NAME : Debra , LAST_NAME : Burks }     880012XXXX     debra.burks@yahoo.com     9273 Thome Ave., Orchard Park, NY - 14127     `;

const STRING_SECOND_LINE_OBJ =
    `{ FIRST_NAME : Kasha , LAST_NAME : Todd }      null           kasha.todd@yahoo.com      910, Vine Street, Campbell, CA - 95008        `;

const FINAL_RESULT_ARRAY_OBJ = [
  STRING_HEADERS_LINE_OBJ,
  STRING_FIRST_LINE_OBJ,
  STRING_SECOND_LINE_OBJ
];


const fs = {
  readFileSync: () => JSON.stringify(JSON_DATA)
}

module.exports = {
  JSON_DATA,
  HEADERS,
  OBJ1,
  START_POINTS,
  STRING_HEADERS_LINE,
  STRING_FIRST_LINE,
  STRING_SECOND_LINE,
  FINAL_RESULT_ARRAY,
  fs,
  JSON_DATA_OBJ,
  HEADERS_OBJ,
  OBJ1_OBJ,
  START_POINTS_OBJ,
  STRING_FIRST_LINE_OBJ,
  FINAL_RESULT_ARRAY_OBJ
};
