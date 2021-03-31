var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");


client.on("connect", function (err) {
    if (err)
    {
        //console.log("Cannot Connect !" + JSON.stringify(err));
        //process.exit(1);
        
        
    }
    console.log("connected flag  " + client.connected);
    
});

setInterval(() => {
  client.publish("Pritam/bus", "Are You in Bus ?");
  console.log("Working Bus");
}, 1000);
setInterval(() => {
  client.publish("Pritam/car", "Are You in Car ?");
  console.log("Working Car");
}, 1000);
setInterval(() => {
    client.publish("Pritam/bus/data", "Hello Pritam are You in Bus ?");
    console.log("Working Bus Data");
}, 1000);
setInterval(() => {
  client.publish("Pritam/car/data", "Hello Pritam are You in Car ?");
  console.log("Working Car Data");
}, 1000);
setInterval(() => {
  client.publish("Pritam/car/tire/data", "You in Car Tire ?");
  console.log("Working Car Tire Data");
}, 1000);
setInterval(() => {
  client.publish("Pritam/car/helth/data", "You in Car Health ?");
  console.log("Working Car Health Data");
}, 1000);
setInterval(() => {
  client.publish("Date", Date.now().toString());
  console.log("Date");
}, 1000);


client.on("error", function (error) {
    console.log("Error Message :" + error);
});
