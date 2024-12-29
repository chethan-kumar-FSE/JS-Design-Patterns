/* The Singleton Pattern is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.
It is often used for things like configuration settings, logging, or database connections, where you want to ensure that multiple parts of your application use the same instance. */

class Datebase {
  constructor() {
    return {
      poolSize: 10,
      findById: () => {
        console.log("findlng by Id");
      },
      find: () => {
        console.log("finding elements");
      },
      connectionString: "http://mongodb:18298:localhost",
    };
  }
}

class Singleton {
  constructor() {
    this.instance = null;
  }
  getInstance() {
    if (!this.instance) {
      this.instance = new Datebase();
    }

    return this.instance;
  }
}

const instance = new Singleton();
instance.getInstance().findById();
instance.getInstance().find();
console.log(instance.getInstance().connectionString);
