const { readFile } = require('fs')

readFile('./sub-fol/text.txt', (e,r) =>{if (e) {
  console.log(e)
  return 
}})