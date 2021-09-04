const connection = require('./connection');
const { ObjectId } = require('mongodb');


async function createSensor(newDevice) {
  try {
    const result = await connection()
      .then((db) => db.collection('sensorData').insertOne(newDevice))
      .then((result) => result);
    return result;
  } catch (e) {
    return e.code;
  }
}

async function updateSensorData(id, value) {
  // console.log('Model', assetid);
  try {
    const update = await connection()
      .then((db) => db.collection('sensorData')
        .updateOne({_id: id}, {$push: {values: value} }));
    return update;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { updateSensorData, createSensor };
