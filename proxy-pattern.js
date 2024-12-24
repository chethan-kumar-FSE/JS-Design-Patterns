const obj = {
  name: "chethan",
  course: "BCA",
};

const proxy = new Proxy(obj, {
  get: (obj, props) => {
    if (!obj[props]) {
      return "The request property does not exist in the object";
    }
    return obj[props];
  },
  set: (obj, props, reciever) => {
    if (props === "name" && typeof reciever !== "string") {
      console.log("invalid");
      return;
    }
    if (props === "course" && typeof reciever !== "string") {
      console.log("invalid");
      return;
    }

    return (obj[props] = reciever);
  },
});

console.log(proxy.name);
proxy.name = 120;
proxy.name = "Mohan";
proxy.course = "MCA";
console.log(proxy.college);
console.log(obj);

//does not directly interact with object , but used proxy to set and get the values , mainly used for validations
