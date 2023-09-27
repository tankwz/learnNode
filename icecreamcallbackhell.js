
let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};


const order = (Fruit_name, call_production) =>{

  setTimeout(()=>{
    console.log(`food order is ${stocks.Fruits[Fruit_name]}`);
  call_production();

  },2000)
  // console.log('order placed, call production');
}

const production = () => {
    setTimeout(()=>{
      console.log('product has started')
      setTimeout(()=>{
        console.log('fruit chopped')
      },2000)
    }, 0)
//  console.log('received, producting')
}

order(0,production);

// order(production);
console.log