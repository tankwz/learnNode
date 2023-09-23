const { log } = require('console');
const path = require('path')

console.log(path.sep)
const filepath = path.join('/nodelearning/','sub-fol','text.txt')
console.log(filepath)

const base = path.basename(filepath);
console.log(base)

const abosulte = path.resolve(__dirname, 'sub-fol','test.txt')
log(abosulte);