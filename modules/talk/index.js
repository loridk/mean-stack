/**
 * Created by lori on 3/6/16.
 */

// not exposed var. Can be used within file
var filename = "index.js";

var hello = function(name) {
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called " + filename + "!")
};

// choose what to expose

module.exports = {
    hello : hello,
    intro : intro
};