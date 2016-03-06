/**
 * Created by lori on 3/6/16.
 */

// reading file Async
var fs = require('fs');

// callback
var onFileLoad = function(err, file) {
    console.log('Got the file');
};

console.log('Going to get the file');

// Async. Grabs file and then runs callback
fs.readFile('readFileSync.js', onFileLoad);


console.log("App continues...");