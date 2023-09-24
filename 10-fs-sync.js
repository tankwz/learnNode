const {readFileSync, writeFileSync} = require('fs');
const fs = require('fs');

const first = readFileSync('./sub-fol/text.txt', 'utf-8');
const second = readFileSync('./sub-fol/secondsubfol/2nd.txt', 'utf-8');

//console.log(first, second);

writeFileSync('./sub-fol/secondsubfol/writetext.txt',`result: '${first}' + '${second}'`);


const third = readFileSync('./sub-fol/secondsubfol/writetext.txt', 'utf-8');

console.log(third);