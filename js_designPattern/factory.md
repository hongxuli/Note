### principle 
create a API for a set of different constructors. expose (type,attributes), and return a selected instance.

``` JS
const Laptop = function({ ram, hdd, name }) {
  this.ram = ram || 0;
  this.hdd = hdd || 0;
  this.name = name || "";
};
module.exports = Laptop;


const Tablet = function({ ram, hdd, name, network }) {
    this.ram = ram || 0;
    this.hdd = hdd || 0;
    this.network = network || 0;
    this.name = name || "";
};
module.exports = Tablet;

const Laptop = require("./laptop");
const Tablet = require("./tablet");
const gadget = { Laptop, Tablet };
module.exports = {
    createGadget(type, attributes) {
        const GadgetType = gadget[type];
        return new GadgetType(attributes);
    }
};

const gadgetFactory = require("./gadgetFactory");
const myLaptop = gadgetFactory.createGadget("Laptop", {
    ram: 8,
    ssd: 256,
    name: "Bab's MacBook Pro"
});
const myTablet = gadgetFactory.createGadget("Tablet", {
    ram: 4,
    hdd: 128,
    name: "Bab's iPad",
    network: '4G'
});
console.log(myLaptop);
console.log(myTablet);
```
