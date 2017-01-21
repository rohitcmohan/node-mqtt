#Node-mqtt

##Usage
- npm install
- npm start -> runs mqtt server
- node clients/node_client.js -> subscribes and listens
- node clients/node_publisher.js -> publishes messages

##Angular client
- node angular_server.js -> starts the angular web service
- listens on localhost:8080
- start publisher

to use mongo backend
- run mongod.exe
- uncomment backend in server setting
