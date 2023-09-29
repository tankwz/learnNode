const { createReadStream } = require('fs');

const stream = createReadStream('./sub-fol/big.txt', {
  highWaterMark: 90000,
});
stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (e) => {
  console.log(e);
});

// const { writeFile, writeFileSync, readFileSync } = require('fs');
// /*for (let i = 0; i < 10000; i++) {
//   writeFileSync('./sub-fol/big.txt', `hellow world ${i}\n`, { flag: 'a' });
// }*/

// const a = readFileSync('./sub-fol/big.txt', 'utf-8');
// console.log(a);
