//object ways to make prototype pattern
const monitor = {
  frame: true,
  stand: true,
  os: "windows",
};

const lgMonitor = Object.create(monitor);
lgMonitor.LED = true;

const lgXMonitor = Object.create(lgMonitor);
console.log(lgXMonitor.__proto__.__proto__);
