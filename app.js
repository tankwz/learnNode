const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (e, r) => {
      if (e) { reject(e); }
      else resolve(r);
    })
  })
}



const start = async () => {
  try {
    const first = await getText('./sub-fol/text.txt')
    const second = await getText('./sub-fol/text.txt')
    console.log(first, second);
  } catch (error) {
    console.log(error)
  }
}
// const start2 = async () =>{
//   const second = await getText('./sub-fol/secondsubfoly/2nd.txt')
//   console.log(second)
// }

start()
// getText('./sub-fol/text.txt')
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));