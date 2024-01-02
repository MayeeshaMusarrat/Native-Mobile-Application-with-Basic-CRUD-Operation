const { MongoClient } = require('mongodb');
require('dotenv/config');

const DB_URI = process.env.DB_URI.replace(
    '<password>',
    process.env.DB_PWD
);

const client = new MongoClient(DB_URI);
client.connect().then (
    () => {
        const database = client.db(process.env.DB_NAME);
        console.log('Database Connected!');
    })
    .catch((error) => {
        console.log("Error connecting Database: ", error);
})