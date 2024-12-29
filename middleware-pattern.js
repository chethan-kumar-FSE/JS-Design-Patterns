/* The Middleware Pattern is a design pattern that allows you to process a request through a series of functions or 
layers (middlewares). Each middleware function performs a specific task and then decides whether to pass the request 
to the next middleware in the chain or to stop further processing.

This pattern is commonly used in frameworks like Express.js for handling HTTP requests. */

class Logger {
  constructor(message) {
    console.log("executed", message, new Date());
  }
}
class UserTrack {
  constructor() {
    console.log("user tracking");
  }
}
class Message {
  constructor(message) {
    this.message = message;
    this.middleware = [new Logger(this.message), new UserTrack()];
  }

  send() {
    new Logger(this.message);
    new UserTrack();
    console.log("message sent");
  }
}

const m = new Message("Hi there");
m.send();
