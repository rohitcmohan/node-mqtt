#Node-mqtt

##Usage
- npm install
- npm start -> runs mqtt broker
- node clients/node_client.js -> subscribes and listens
- node clients/node_publisher.js -> publishes messages

##Angular Paho client
- node angular_server.js -> starts the angular web service
- listens on localhost:8080
- start publisher

- publisher sends messages every second
- both the mqtt node client and paho client receives the message
- the html updates scope on message received

to use mongo backend
- run mongod.exe
- uncomment backend in server setting
