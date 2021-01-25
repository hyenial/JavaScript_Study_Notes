// import os library to the node environment


const os = require('os');
var totalMemory = os.totalmem()
var freeMomory = os.freemem();

//console.log('total memory '+ totalMemory); this also works

console.log(`Total memory: ${totalMemory}`); //this is ES6
console.log(`Free memory: ${freeMomory}`); //this is ES6
