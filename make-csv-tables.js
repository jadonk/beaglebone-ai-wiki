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

function extractHeaders(table, title, columns, rows) {
  console.log(title);
  console.log("");
  console.log("[%header,format=csv]");
  console.log(",===");
  var newTable = [];
  for(var i in table) {
    //console.error("row = " + i);
    if(table[i]["Board or signal detail"] == "BeagleBone AI") {
      //console.error(JSON.stringify(table[i]));
      //console.log(columnTitles);
      for(var k in rows) {
        var row = [];
        for(var j in columns) {
          if(j == 0) {
            row.push(rows[k]);
          } else {
            row.push(table[parseInt(i,10)+parseInt(k,10)][columns[j]]);
          }
        }
        console.log(row.join(","));
      }
      console.log(",===");
      console.log("");
      break;
    }
  }
}

function extractTables(table, rowCount) {
  extractHeaders(table, 
    "",
    ["Board or signal detail","1","2","3"],
    ["","GPIO","BALL","PINCTRL","MODE0","MODE1","MOdE2","MODE3","MODE4","MODE5","MODE6","MODE7","MODE8","MODE9","MODE10","MODE11","MODE12","MODE13","MODE14","MODE15",
               "BALL","PINCTRL","MODE0","MODE1","MOdE2","MODE3","MODE4","MODE5","MODE6","MODE7","MODE8","MODE9","MODE10","MODE11","MODE12","MODE13","MODE14","MODE15"]
  );
  extractHeaders(table, 
    "",
    ["Board or signal detail","4","5","6"],
    ["","GPIO","BALL","PINCTRL","MODE0","MODE1","MOdE2","MODE3","MODE4","MODE5","MODE6","MODE7","MODE8","MODE9","MODE10","MODE11","MODE12","MODE13","MODE14","MODE15",
               "BALL","PINCTRL","MODE0","MODE1","MOdE2","MODE3","MODE4","MODE5","MODE6","MODE7","MODE8","MODE9","MODE10","MODE11","MODE12","MODE13","MODE14","MODE15"]
  );
  extractHeaders(table, 
    "",
    ["Board or signal detail","7","8","9"],
    ["","GPIO","BALL","PINCTRL","MODE0","MODE1","MOdE2","MODE3","MODE4","MODE5","MODE6","MODE7","MODE8","MODE9","MODE10","MODE11","MODE12","MODE13","MODE14","MODE15",
               "BALL","PINCTRL","MODE0","MODE1","MOdE2","MODE3","MODE4","MODE5","MODE6","MODE7","MODE8","MODE9","MODE10","MODE11","MODE12","MODE13","MODE14","MODE15"]
  );
}

parseInput(table1, extractTables);
