class Factory {
  constructor() {
    this.instances = {};
  }
  createCircle(color) {
    if (this.instances[color]) {
      console.log("getting the instance from cache");
      return this.instances[color];
    }
    console.log("newly created object");
    this.instances[color] = new Circle(color);
    return this.instances[color];
  }
}

class Circle {
  constructor(color) {
    this.color = color; //intrinsic state , which remains same for all instances
  }
  setCoOrdinates(x, y) {
    //the co-oridinates may vary depending on x,y values
    return {
      x: x,
      y: y,
    };
  }
}

const fact = new Factory();

const redBall1 = fact.createCircle("red");
const redBall2 = fact.createCircle("red");

console.log(redBall1 === redBall2); //pointing to same instances
console.log(redBall1.setCoOrdinates(10, 20));
console.log(redBall2.setCoOrdinates(40, 60));

/* 1. Intrinsic State

Definition: Intrinsic state is the shared, immutable data that does not change across instances. It is stored in the flyweight object itself and reused.

In the Code:

The color property of the Circle class is intrinsic.
Why? The color value is the same for all circles of a specific color (e.g., "red" or "blue"). It is shared and does not depend on where or how the circle is drawn. */

/* 2. Extrinsic State

Definition: Extrinsic state is the unique, non-shared data that can vary between instances. It is passed dynamically and is not stored in the flyweight object.

In the Code:

The x and y coordinates passed to the draw method are extrinsic.
Why? The coordinates change depending on where each circle is drawn and are not part of the shared flyweight instance. */
