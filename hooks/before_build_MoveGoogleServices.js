#!/usr/bin/env node

//global variables
var appId = "";

// required node modules
var fs = require('fs');
var path = require('path');

// determine appId (read it from config.xml)
var configFile = "config.xml";
var xmlData = fs.readFileSync(configFile).toString('utf8');
console.log(xmlData);
var n = xmlData.search("<widget id=\"");
if(n > 0)
{
  n += 12;
  var count = 0;
  var cont = true;
  while(cont) {
    if(xmlData[n+count] == "\"") {
      cont = false;
    } else {
      count++;
    }
  }
  appId = xmlData.substring(n, n+count);
}

//function to copy the file
function copyGoogleServicesFile() {
  var srcFile = path.join("www/google-services", appId, "google-services.zip");
  if(fs.existsSync(srcFile)) {
    fs.createReadStream(srcFile).pipe(fs.createWriteStream(path.join("www/google-services/google-services.zip")));
  }
};

copyGoogleServicesFile();