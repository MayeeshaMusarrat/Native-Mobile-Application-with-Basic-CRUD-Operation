const mongoose = require('mongoose');
require('dotenv/config');

const DB_URI = process.env.DB_URI.replace(
  '<password>',
  process.env.DB_PWD
);

mongoose.connect(DB_URI, {
  serverSelectionTimeoutMS: 5000,
  dbName: process.env.DB_NAME,
})
  .then(() => {
    console.log('Database Connected!');
  })
  .catch((error) => {
    console.error('Error connecting to Database:', error);
});
