// const EventEmitter = require("node:events")

// const emitter = new EventEmitter() ;

// emitter.on("order pizza" , (size , topping) => {
//     console.log(`pizza is ${size} , with ${topping}`)
// })
// emitter.on("order pizza" , (size , topping) => {
//     if(size === "large"){
//         console.log(`new order`)
//     }
// })
// console.log("this is after console")
// emitter.emit("order pizza" ,  "large" , "mashroom")

const Pizzashop = require("./pizza-shop")
const Drinkmachine = require("./drinkmachine")

const pizzashop = new Pizzashop() ;
const drinkMachine = new Drinkmachine() ;

pizzashop.on("order" , (size , topping) => {
        console.log(`pizza is ${size} , with ${topping} order is accepted`);
        drinkMachine.serveDrink(size);
    })
pizzashop.order("large" , "mashroom")
pizzashop.displayordernumber()
