var mqtt = require('mqtt')

client = mqtt.connect();

client.subscribe('mqttest');

console.log('Client publishing.. ');
client.publish('mqttest', "{message: hello}");

client.end();
