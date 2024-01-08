const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const webToken = require('jsonwebtoken');
require('dotenv/config');
const { signupValidationForUser } = require('../../utils/AuthenticationUtil/authValidation/signupValidationForUser');
const { generateHashPasswordForUser } = require('../../utils/AuthenticationUtil/hashPasswords/generateHashPassword');

/**** 
 *  Joi signup and login schemas check the validation of the variables.
 *  const validationResult = signupValidationForUser.validate({ username: 'mai', email: 'mai18@gmail.com', password: 'M@yeesha123!' });
 *****/

router.post('/', async (req, res) => {
    try 
    {
        const { username, email, password } = req.body;
        console.log("Received in signup: ", req.body);
        
        const { error } = signupValidationForUser.validate({ username, email, password });
        if (error)
        {
            //send 404 status if the values are invalid
            return res.status(404).json({ error: error.details[0].message });
        }
        
        //Check if the user already exists in the database
        const emailExists = await User.findOne({ email: email });
        //const usernameExist = await User.findOne({ username: req.body.username });
        if (emailExists) throw Error("Signup failed: Email already exists.");
        //if (usernameExist) throw Error("Signup fail: username already exist"); 

        ///Hash the user password
        const hashedPasswordForUser = await generateHashPasswordForUser(password);
        console.log("Hashed password: ", hashedPasswordForUser); 

        // Create new user object
        const newUser = new User({
          username,
          email,
          password: hashedPasswordForUser
        });

        // Save newUser data to the database
        const savedUser = await newUser.save();
       
       /* const token = webToken.sign({ _id: newUser._id }, process.env.JWT_SECRET_KEY);*/

        console.log("New user has been added:", savedUser);
        res.status(200).json({ message: 'User successfully inserted', user: savedUser });
    }
    catch (error) 
    {
      console.error('Error during signup:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
})

module.exports = router;