#!/usr/bin/env node

//global variables
var environment = "";


// required node modules
var fs = require('fs');
var path = require('path');
var rootdir = "";
var buildDir = "";

// determine environment (read it from config.xml)
var configFile = "config.xml";
var xmlData = fs.readFileSync(configFile).toString('utf8');
var n = xmlData.search("<preference name=\"environment\"");
if(n > 0)
{
  n += 38;
  var count = 0;
  var cont = true;
  while(cont) {
    if(xmlData[n+count] == "\"") {
      cont = false;
    } else {
      count++;
    }
  }
  environment = xmlData.substring(n, n+count);
}

copyGoogleServicesFile();

function copyGoogleServicesFile() {
  var srcFile, destFile;

  srcFile = path.join("www/google-services", environment, "google-services.zip");
  if(fs.existsSync(srcFile)) {
    fs.createReadStream(srcFile).pipe(fs.createWriteStream("www/google-services/google-services.zip"));
  }
}