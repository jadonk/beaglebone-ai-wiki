#!/usr/bin/env node
var fs = require("fs");
var csv = require("fast-csv");
var table1 = [];

function parseInput(table, callback) {
  var csvParse = csv.parse({ headers: true });
  var csvStreamIn = fs.createReadStream("BeagleBone_Cape_Header_Pins.csv");
  var parsedStream = csvStreamIn.pipe(csvParse);
  parsedStream.on("error", function(error) {
    console.error(error);
  });
  parsedStream.on("data", function(row) {
    table.push(row);
  });
  parsedStream.on("end", function(rowCount) {
    callback(table, rowCount);
  });
}

function formatOutput(table, rowCount) {
  //console.error("Parsed " + rowCount + " rows");
  var csvStreamOut = csv.format({ headers: true, quoteHeaders: true });
  csvStreamOut.pipe(process.stdout);
  for(var i in table) {
    csvStreamOut.write(table[i]);
  }
  process.stdout.write("\n");
}

parseInput(table1, formatOutput);
