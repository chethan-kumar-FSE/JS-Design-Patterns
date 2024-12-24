class Channel {
  constructor() {
    this.observers = [];
  }

  subscribe(user) {
    this.observers.push(user);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.updateDate(data));
  }
}

class User1 {
  update(data) {
    console.log("notified", data);
  }
}
class User2 {
  update(data) {
    console.log("notified", data);
  }
}
const user1 = new User1();
const user2 = new User2();

const channel = new Channel();
channel.subscribe(user1);
channel.subscribe(user2);

channel.notify("yes im going");
