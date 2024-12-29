/* The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.
The cool thing about this pattern is that we separate the creation of properties and methods into different entities. */

class Pizza {
  constructor(size, type, toppins) {
    this.size = size;
    this.type = type;
    this.toppins = toppins;
  }
  getDescription() {
    return `you're order contains ${this.size},${this.type},and ${this.toppins}`;
  }
}

class Pizzabuilder {
  constructor() {
    this.size = "large";
    this.crust = "thin";
    this.toppins = [];
  }

  setToppins(tops) {
    this.toppins.push(tops);
    return this;
  }

  setCrust(crust) {
    this.crust = crust;
    return this;
  }

  build() {
    return new Pizza(this.size, this.crust, this.toppins);
  }
}
const pizza = new Pizzabuilder()
  .setToppins("chillyFlakes")
  .setCrust("thin")
  .setToppins("paneer")
  .build();
console.log(pizza.getDescription());
