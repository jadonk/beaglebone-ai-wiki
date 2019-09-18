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

//var tableId = 2;
var tableId = 4;
function extractHeaders(table, title, columns, rows) {
  console.log("[[" + title.toLowerCase() + "]]");
  //console.log("===== 7.1.1." + tableId + " " + title);
  console.log("===== 7.1.2." + tableId + " " + title);
  tableId++;
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

var rows2ball = 
    ["","*GPIO*","*BALL*","*REG*","*MODE 0*","*1*","*2*","*3*","*4*","*5*","*6*","*7*","*8*","*9*","*10*","*11*","*12*","*13*","*14*","*15*",
               "*2nd BALL*","*2nd REG*","*2nd MODE 0*","*2nd 1*","*2nd 2*","*2nd 3*","*2nd 4*","*2nd 5*","*2nd 6*","*2nd 7*","*2nd 8*","*2nd 9*","*2nd 10*","*2nd 11*","*2nd 12*","*2nd 13*","*2nd 14*","*2nd 15*"];

var rows1ball = 
    ["","*GPIO*","*BALL*","*REG*","*MODE 0*","*1*","*2*","*3*","*4*","*5*","*6*","*7*","*8*","*9*","*10*","*11*","*12*","*13*","*14*","*15*"];

function extractTables(table, rowCount) {
  /*
  extractHeaders(table, 
    "P8.03-P8.05",
    ["Board or signal detail","1","2","3"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.06-P8.09",
    ["Board or signal detail","4","5","6","7"],
    rows1ball,
  );
  extractHeaders(table, 
    "P8.10-P8.13",
    ["Board or signal detail","8","9","10","11"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.14-P8.16",
    ["Board or signal detail","12","13","14"],
    rows2ball
  );
  extractHeaders(table, 
    "P8.17-P8.19",
    ["Board or signal detail","15","16","17"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.20-P8.22",
    ["Board or signal detail","18","19","20"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.23-P8.26",
    ["Board or signal detail","21","22","23","24"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.27-P8.29",
    ["Board or signal detail","25","26","27"],
    rows2ball
  );
  extractHeaders(table, 
    "P8.30-P8.32",
    ["Board or signal detail","28","29","30"],
    rows2ball
  );
  extractHeaders(table, 
    "P8.33-P8.35",
    ["Board or signal detail","31","32","33"],
    rows2ball
  );
  extractHeaders(table, 
    "P8.36-P8.38",
    ["Board or signal detail","34","35","36"],
    rows2ball
  );
  extractHeaders(table, 
    "P8.39-P8.41",
    ["Board or signal detail","37","38","39"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.42-P8.44",
    ["Board or signal detail","40","41","42"],
    rows1ball
  );
  extractHeaders(table, 
    "P8.45-P8.46",
    ["Board or signal detail","43","44"],
    rows2ball
  );
  */
  extractHeaders(table, 
    "P9.11-P9.13",
    ["Board or signal detail","50","51","52"],
    rows2ball
  );
  extractHeaders(table, 
    "P9.14-P9.16",
    ["Board or signal detail","53","54","56"],
    rows1ball
  );
  extractHeaders(table, 
    "P9.17-P9.19",
    ["Board or signal detail","57","58","59"],
    rows2ball
  );
  extractHeaders(table, 
    "P9.20-P9.22",
    ["Board or signal detail","60","61","62"],
    rows2ball
  );
  extractHeaders(table, 
    "P9.23-P9.25",
    ["Board or signal detail","63","64","65"],
    rows1ball
  );
  extractHeaders(table, 
    "P9.26-P9.29",
    ["Board or signal detail","66","67","68","69"],
    rows2ball
  );
  extractHeaders(table, 
    "P9.30-P9.31",
    ["Board or signal detail","70","71"],
    rows2ball
  );
  extractHeaders(table, 
    "P9.41-P9.42",
    ["Board or signal detail","82","83"],
    rows2ball
  );
}

parseInput(table1, extractTables);
