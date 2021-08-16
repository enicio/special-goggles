const connection = require('../models/connection');
async function getAll(collection) {
  try {
    const result = await connection()
      .then((db) => db.collection(collection).find().toArray());
    return result;
  } catch (e) {
    console.log(e);
  }
}


module.exports = { getAll };
