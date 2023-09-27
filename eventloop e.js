const {readFile} = require('fs');

console.log("first task");
readFile('./sub-fol/text.txt','utf8',(e,r)=>{
  if(e){
    console.log(e); return;
  }
   console.log(r);
   console.log('done')
})


console.log('last task')