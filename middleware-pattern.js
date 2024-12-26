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
