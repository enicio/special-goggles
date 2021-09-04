const sensorModel = require('../models/assetDataModel');

module.exports = (client) => {

  const ARRAY_LENGTH = 2;

  client.on('connect', function () {
    console.log('Connected');
  });

  client.on('error', function (error) {
    console.log(error);
  });

  client.on('message', async function (topic, message) {
    //Called each time a message is received

    if(message.toString().split('-').length === ARRAY_LENGTH ) {
      console.log('new connection');
      deviceConnection = message.toString().split('-');
      const deviceId = deviceConnection[1].replace(/:/g, '');
      console.log(deviceId);

      const newDevice = {
        _id: deviceId,
        values: []
      };

      const result = await sensorModel.createSensor(newDevice);
      console.log('local', result);
    } else {
      const topicInf =  topic.toString().split('/');
      const topicId = topicInf[2].replace(/:/g, '');
      console.log(topicId);
      const result = await sensorModel.updateSensorData(topicId, message.toString());
    }

  });

  client.subscribe('lab/rinoa/DC:4F:22:10:2D:C8');
};
