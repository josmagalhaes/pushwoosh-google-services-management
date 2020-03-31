var exec = require('cordova/exec');

/**
 * @constructor
 */
var GoogleServices = {

    doNothing: function() {
      var success = function() {
        console.log("successfully did nothing");
      };
      var error = function() {
        console.log("failed to do nothing");
      }
      exec(success, error, 'GoogleServices', 'doNothing', []);
    }
};

module.exports = GoogleServices;