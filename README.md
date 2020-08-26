<h1 align="center">json-to-txt</h1>

<div align="center">

Reads JSON data (Array of objects) and returns a string in a txt file format.

</div>

## Installation

```
npm i --save json-to-txt
```

## Usage

`json-to-txt` support CommonJS.

### In module system

Use `filePath` key to provide `JSON data from file`.

```javascript
const jsonToTxt = require("json-to-txt");
const dataInString = jsonToTxt({ filePath: "./filePath.json" });
```

Use `data` key to provide `JSON data from variable or directly`.

```javascript
const jsonToTxt = require("json-to-txt");
const dataInString = jsonToTxt({ data: someJSONData });
```

#### Sample input (json data) :

```
[
  {
    NAME: {FIRST_NAME: 'Debra', LAST_NAME: 'Burks'},
    NUMBER: '880012XXXX',
    EMAIL: 'debra.burks@yahoo.com',
    ADDRESS: '9273 Thome Ave., Orchard Park, NY - 14127'
  },
  {
    NAME: {FIRST_NAME: 'Kasha', LAST_NAME: 'Todd'},
    NUMBER: null,
    EMAIL: 'kasha.todd@yahoo.com',
    ADDRESS: '910, Vine Street, Campbell, CA - 95008'
  },
  {
    NAME: {FIRST_NAME: 'Tameka', LAST_NAME: 'Fisher'},
    NUMBER: '880111XXXX',
    EMAIL: 'tameka.fisher@yahoo.com',
    ADDRESS: '7693 Honey Creek St., Redondo Beach, CA - 90278'
  },
  {
    NAME: {FIRST_NAME: 'Daryl', LAST_NAME: 'Spence'},
    NUMBER: '990015XXXX',
    EMAIL: null,
    ADDRESS: '988 Pearl Lane!!! (Uniondale), NY - 11553'
  },
  {
    NAME: {FIRST_NAME: 'Charolette', LAST_NAME: 'Rice'},
    NUMBER: '720012XXXX',
    EMAIL: 'charolette.rice@msn.com',
    ADDRESS: '107 ~ River Dr. `Sacramento`, "CA"      95820'
  }
]
```

#### Sample output (txt data) :

```
NAME                                               NUMBER           EMAIL                         ADDRESS                                               
{ FIRST_NAME : Debra , LAST_NAME : Burks }         880012XXXX       debra.burks@yahoo.com         9273 Thome Ave., Orchard Park, NY - 14127           
{ FIRST_NAME : Kasha , LAST_NAME : Todd }          null             kasha.todd@yahoo.com          910, Vine Street, Campbell, CA - 95008              
{ FIRST_NAME : Tameka , LAST_NAME : Fisher }       880111XXXX       tameka.fisher@yahoo.com       7693 Honey Creek St., Redondo Beach, CA - 90278     
{ FIRST_NAME : Daryl , LAST_NAME : Spence }        990015XXXX       null                          988 Pearl Lane!!! (Uniondale), NY - 11553           
{ FIRST_NAME : Charolette , LAST_NAME : Rice }     720012XXXX       charolette.rice@msn.com       107 ~ River Dr. `Sacramento`, "CA"      95820       
```
