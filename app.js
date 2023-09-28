const { rejects } = require('assert');
const { readFile } = require('fs');
const { get } = require('http');
const { resolve } = require('path');


const getText = (path) => {
  return new Promise((resolve, reje)=>{
    readFile(path, 'utf-8', (err, data) => {
      if (err) reje(err)
      else {
        resolve(data);
      }
    })

  })
}

getText('./sub-fol/text.txt')
  .then((result)=> console.log(result))
  .catch((err)=>console.log(err))

const start = async()=>{
  const first = getText('./sub-fol/text.txt')
}  







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