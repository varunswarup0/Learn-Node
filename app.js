const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a listener
emitter.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});

// Raise an Event
emitter.emit("messageLogged", { id: 1, url: "http://" });

emitter.on("logging", (arg) => {
  console.log("Listener Called", arg);
});
emitter.emit("logging", { data: "message" });
