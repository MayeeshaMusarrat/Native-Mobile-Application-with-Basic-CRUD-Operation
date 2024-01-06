// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/user.model.js')
const loginRoute = require('./routes/authRoutes/loginRoute');
const signupRoute = require('./routes/authRoutes/signupRoute');
const requireToken = require('./middleware/authMiddleware');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');  // Add this line
const app = express();

require('dotenv/config');
require("./database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

/** Auth Middleware will run to check for a valid authentication token in the request header
  * Protected Route '/'
**/

mongoose.connect('mongodb://musarratmayeesha:9gftHIhyOH0astZh@ac-jvd5yu1-shard-00-00.ktbwh6k.mongodb.net:27017,ac-jvd5yu1-shard-00-01.ktbwh6k.mongodb.net:27017,ac-jvd5yu1-shard-00-02.ktbwh6k.mongodb.net:27017/?ssl=true&replicaSet=atlas-ats06j-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Set a higher value if needed
});

app.use(cors()); // Add this line to enable CORS for all routes.

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const username="faria";
      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password,
        // Add other properties if needed
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      console.log('User successfully inserted:', savedUser);
      res.status(201).json({ message: 'User successfully inserted', user: savedUser });
    } catch (error) {
      console.error('Error during user insertion:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
