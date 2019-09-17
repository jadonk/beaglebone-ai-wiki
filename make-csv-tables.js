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

function extractHeaders(table, rowCount) {
  console.log("[%header,format=csv]");
  console.log(",===");
  var newTable = [];
  var columns = ["Board or signal detail","1","2","3","4"];
  for(var i in table) {
    //console.error("row = " + i);
    if(table[i]["Board or signal detail"] == "BeagleBone AI") {
      //console.error(JSON.stringify(table[i]));
      //console.log(columnTitles);
      //for(var k = 0; k < 20; k++) {
      for(var k = 0; k < 36; k++) {
        var row = [];
        for(var j in columns) {
          row.push(table[parseInt(i,10)+k][columns[j]]);
        }
        console.log(row.join(","));
      }
      console.log(",===");
      console.log("");
      break;
    }
  }
}

parseInput(table1, extractHeaders);
