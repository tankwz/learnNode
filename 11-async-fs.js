const { readFile, writeFile } = require('fs')
readFile('./sub-fol/text.txt', 'utf-8', (e, r) => {
  if (e) {
    console.log(e)
    return
  }
  const first = r;
  readFile('./sub-fol/secondsubfol/2nd.txt', 'utf8', (e, r) => {
    if (e) {
      console.log(e)
      return
    }
    const second = r;
    writeFile('./sub-fol/result-async.txt', `here is the rewrweesult${first}, ${second}`, (e, r) => {
      if (e) {
        console.log(e);
        return;
      }
      console.log(r);
    })

  })
})