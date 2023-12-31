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
    })
    .catch((err) => {
        console.error('DB Connection Error:', err);
    });

const database = client.db("testerDB"); 

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
