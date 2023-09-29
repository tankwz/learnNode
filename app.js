const { readFile, writeFile } = require('fs').promises;

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reje) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) reje(err);
//       else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText('./sub-fol/text.txt')
//   .then((result)=> console.log(result))
//   .catch((err)=>console.log(err))
const start = async () => {
  try {
    const first = await readFile('./sub-fol/text.txt', 'utf8');
    const second = await readFile('./sub-fol/secondsubfol/2nd.txt', 'utf8');
    const filewrite = await writeFile(
      './sub-fol/writefile.txt',
      `writefile ${first} ${second}`
    );
    console.log(first, second);
  } catch (e) {
    console.log(e);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (e, r) => {
//       if (e) { reject(e); }
//       else resolve(r);
//     })
//   })
// }

// const start = async () => {
//   try {
//     const first = await getText('./sub-fol/text.txt')
//     const second = await getText('./sub-fol/text.txt')
//     console.log(first, second);
//   } catch (error) {
//     console.log(error)
//   }
// }
// // const start2 = async () =>{
// //   const second = await getText('./sub-fol/secondsubfoly/2nd.txt')
// //   console.log(second)
// // }

// start()
// // getText('./sub-fol/text.txt')
// //   .then((r) => console.log(r))
// //   .catch((e) => console.log(e));
