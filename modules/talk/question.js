/**
 * Created by lori on 3/6/16.
 */

var answer = "Now that's a good question!";

// automatically chained export
module.exports.ask = function(question) {
    console.log(question);
    return answer;
};