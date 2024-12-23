class Cart {
  constructor(initialItems) {
    this.initialItems = initialItems || [];
    this.price = 0;
  }

  addItemToCart({ id, product, price }) {
    console.log("id", id, product, price);
    if (this.initialItems.length >= 6) {
      return "You're cart is already full";
    }
    this.initialItems.push({ id, product, price });
    this.price = this.price + price;
  }

  getCartLength() {
    if (!this.initialItems.length) {
      return "No items were added to cart";
    }
    return this.initialItems.length;
  }
  getCartPrice() {
    if (this.price === 0) return "No items were added to cart";
    return this.price;
  }

  displayCartItems() {
    return this.initialItems.map((val) => {
      return {
        productId: val.id,
        productName: val.name,
        productPrice: val.price,
      };
    });
  }
  removeCartItem({ productId }) {
    this.initialItems = this.initialItems.filter((val) => val.id !== productId);
    return this.initialItems;
  }
}
const cart = new Cart();

cart.addItemToCart({ id: 1, product: "laptop", price: 1000 });
cart.addItemToCart({ id: 2, product: "mouse", price: 2000 });

console.log(cart.getCartLength());
console.log(cart.getCartPrice());
console.log(cart.displayCartItems());
console.log(cart.removeCartItem({ productId: 1 }));
