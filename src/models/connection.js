const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_DB_URL, DB_NAME } = process.env;

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect("mongodb://admin:admin@db", OPTIONS)
      .then((conn) => {
        db =  conn.db("aipsi");
        return db;
      });
};

module.exports = connection;
