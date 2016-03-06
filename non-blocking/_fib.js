/**
 * Created by lori on 3/6/16.
 */

// finds 42 number of fibonacci

var recursive = function(n) {
  if(n <= 2) {
      return 1;
  }
  else {
    return recursive(n -1) + recursive(n - 2);
  }
};

console.log(recursive(42));