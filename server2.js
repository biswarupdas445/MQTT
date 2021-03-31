var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");

console.log("connected flag  " + client.connected);

client.on("connect", function (err) {
    if (!err)
    {
        console.log("Connected");
    }
    console.log("connected flag  " + client.connected);
  
});
client.subscribe(["Pritam/car/#", "Date"], function (err) {
  if (err) {
    //client.publish("presence", "Hello mqtt");
    console.log("Subscribed to__" + JSON.stringify(err));
  }
});

client.on("message", function (topic, message) {
  // message is Buffer
    
    console.log("topic:", topic);
    console.log("Message:", message.toString());
  //client.end();
});