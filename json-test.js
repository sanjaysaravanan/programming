const data = require("./sample.json");
const _ = require("loadash")

const data2 = { "name": "Sanjay", "attrs": 2 }
const data3 = { "attrs": 2, "name": "Sanjay" }

console.log(_.isEqual(data3, data2));

console.log(data);