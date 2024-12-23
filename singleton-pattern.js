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
