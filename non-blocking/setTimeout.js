/**
 * Created by lori on 3/6/16.
 */

console.log("1: Start app");

// timeout, comes 1000ms/1sec after ran, doesn't hold up code
var holdOn = setTimeout(function() {
        console.log("2: Set timeout");
    },1000
);

console.log("3: End app");