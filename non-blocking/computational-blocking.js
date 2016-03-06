/**
 * Created by lori on 3/6/16.
 */

// This will block due to node's single thread processing

console.log(1);

require('./_fib.js');

console.log(2);