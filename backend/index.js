const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));

const client = new MongoClient(process.env.DB_URI);

client.connect()
    .then(() => {
        console.log('DB Connected!');
        const collection = client.db("testerDB").collection("users");

        collection.find({}).toArray()
            .then((users) => {
                console.log('Users in the "users" collection:', users);
            })
            .catch((err) => {
                console.error('Error fetching users:', err);
            })
            .finally(() => {
                client.close();
                console.log('Connection closed');
            });
    })
    .catch((err) => {
        console.error('DB Connection Error:', err);
    });

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
