const fs = require("fs");
const { getStartPoints, getRows, getData } = require("./src/lib.js");

const main = function (params) {
    const data = getData(params, fs);
    const groups = Array.from(new Set(data.map(item => Object.keys(item).toString())));
    return groups
        .map(group => {
            const groupData = data.filter(item => Object.keys(item).toString() === group);
            const headers = Object.keys(groupData[0]);
            const startPoints = getStartPoints(groupData, headers);
            const rows = getRows(groupData, headers, startPoints);
            return rows.join('\n');
        }).join('\n');
}

module.exports = main;
