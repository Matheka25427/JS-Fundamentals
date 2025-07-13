$ node 4-concat.js c cool
c is cool
console.log()
$ node 4-concat.js c
c is undefined

$ node 4-concat.js
undefined is undefined
#!/usr/bin/node

const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(arg1 + ' is ' + arg2);
