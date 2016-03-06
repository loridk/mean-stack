
require('./instantHello'); // grabs what is there, runs instantly
var goodbye = require('./talk/goodbye'); // external function linked to var
var talk = require('./talk'); // grabs index file
var question = require('./talk/question');


// call method in talk
talk.intro();
talk.hello("All");

// call method in talk/question
// store return value
var answer = question.ask("What is the meaning of life?");
console.log(answer);

// call goodbye method
goodbye();