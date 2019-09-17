#!/usr/bin/env node
var csv = require("fast-csv");
var table = require("./BeagleBone_Cape_Header_Pins.json");

var csvStream = csv.format({ headers: true, quoteHeaders: true });
csvStream.pipe(process.stdout);
for(var i in table) {
  csvStream.write(table[i]);
}
process.stdout.write("\n");
