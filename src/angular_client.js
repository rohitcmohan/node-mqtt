(function() {
  angular.module('app', ['angularPaho']);
})();

(function() {
  angular.module('app').controller('test', [ '$scope', 'MqttClient', function($scope, MqttClient) {

    var ip = "localhost";
    var port = "1885";
    var id = "test2";

    MqttClient.init(ip, port, id);
    MqttClient.connect({onSuccess: successCallback});
    //MqttClient.subscribe('mqttest');
    console.log("started")

    function successCallback() {
      MqttClient.subscribe('mqttest');
      console.log('subscribed')
      MqttClient._client.onMessageArrived = onMessageArrived;
      //message = new Paho.MQTT.Message("Hello");
      //message.destinationName = "mqttest";
      //MqttClient.send(message);
    }

    function onMessageArrived(message) {
      console.log("onMessageArrived:"+message.payloadString);
      $scope.data = message.payloadString;
      $scope.$apply();
    }

  }]);
})();
