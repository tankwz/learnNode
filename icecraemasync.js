
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
// const time = (ms)=>{
  
// }
function time(ms) {
  return new Promise ((resolve,reject)=>{
    if(is_shop_open){
      setTimeout(resolve,ms)
    }
    else {
      reject(console.log('closed'))
    }
  })
}

console.log('start');
async function kitchen(){
  try {
    await time(0);
    console.log(`${stocks.Fruits[1]}`)
  } catch (error) {
    console.log('cusomter left', error)
  }
  finally{
    console.log('day end')
  }
}




console.log('middle')
 kitchen()

console.log('finish')










