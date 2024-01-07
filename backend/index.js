// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/user.model.js')
const loginRoute = require('./routes/authRoutes/loginRoute');
const signupRoute = require('./routes/authRoutes/signupRoute');
const requireToken = require('./middleware/authMiddleware');

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
app.get('/', requireToken, (req, res) => {
  res.send('This is a protected route');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
