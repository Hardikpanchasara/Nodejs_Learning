const EventEmitter = require("node:events")

class pizzashop extends EventEmitter {
    constructor(){
        super()
        this.ordernumber = 0
    }

    order(size, topping){
        this.ordernumber++ ;
        this.emit("order" , size , topping)
    }

    displayordernumber(){
        console.log(this.ordernumber)
    }
}

module.exports = pizzashop ;