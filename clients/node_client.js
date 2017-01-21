var mqtt = require('mqtt')

client = mqtt.connect();

client.subscribe('mqttest');

client.on('message', function(topic, message) {
  console.log('%s', message);
});

console.log('Client started...');
