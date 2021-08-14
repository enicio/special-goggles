const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function createUser(user) {
  try {
    const result = await connection().then((db) => db.collection('users').insertOne(user))
      .then((result) => result);
    return result;
  } catch (e) {
    console.log(e);
  }
}
async function findByEmail(email) {
  try {
    const IsEmail = connection()
      .then((db) => db.collection('users')
        .findOne( {email} ))
      .then((result) => result );
    return IsEmail;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createUser, findByEmail };
