
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const is_shop_open = false;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work())
      }, time);
    }
    else {
      reject(console.log("closed"))
    }
  })
}


order(2000, () => console.log(`${stocks.Fruits[0]}`))
  .then(() => {
    return order(0, () => console.log("product starting"));
  })
  .then(() => {
    return order(2000, () => console.log('fruit chopped'));
  })
  .catch(()=>{
    console.log("left")
  })
  .finally(()=>{
    console.log('end')
  })