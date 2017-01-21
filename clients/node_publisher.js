var mqtt = require('mqtt')

client = mqtt.connect();

client.subscribe('mqttest');

console.log('Client publishing.. ');
message = "Hi Chaitra"

client.publish('mqttest', message);
var i = 0;
var interval = setInterval(function() {
  message = "Update message "+i
  client.publish('mqttest', message);
  i++;
}, 1000);
