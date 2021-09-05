const sensorModel = require('../models/assetDataModel');
const { redisGetAsync, redisSetAsync } = require('../utils/redis');
// const io =  require('../socket');
const EXPIRATION_TIME_SECONDS = 6000;
module.exports = (client, io) => {

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
      console.log(message.toString());
      const result = await sensorModel.updateSensorData(topicId, message.toString());
      redisSetAsync('temp',message.toString(), EXPIRATION_TIME_SECONDS);
      io.emit('setTemp', message.toString() );
    }

  });

  client.subscribe('lab/rinoa/DC:4F:22:10:2D:C8');
};
