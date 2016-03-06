/**
 * Created by lori on 3/6/16.
 */

// create a child process to not block up code
var child_process = require('child_process');

console.log(1);

// spawn the child process
var newProcess = child_process.spawn('node', ['_fib.js'], {
    stdio : 'inherit' // bring to main console log
});

console.log(2);