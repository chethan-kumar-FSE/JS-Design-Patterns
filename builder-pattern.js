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
