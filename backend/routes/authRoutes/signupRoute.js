const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const { signupValidationForUser } = require('../../utils/AuthenticationUtil/authValidation/signupValidationForUser');
const { generateHashPasswordForUser } = require('../../utils/AuthenticationUtil/hashPasswords/generateHashPassword');

/**** 
 *  Joi signup and login schemas check the validation of the variables.
 *  password field usage method:
 *  const validationResult = signupValidationSchema.validate({ username: 'mai', email: 'mai18@gmail.com', password: 'M@yeesha123!' });
 *****/

router.route('/signup').post(async (req,res) => {
    
    const { username, email, password } = req.body;
    console.log("received values: ", req.body);

    /*
    try 
    {
        const validateUserData = signupValidationForUser({ username, email, password });
        if (validateUserData.error)
        {
            //send 404 status
        }
        //! === What if the username/email already exist? Handle the case ===

        ///Hash the user password
        hashedPasswordForUser = generateHashPasswordForUser(password);

        //create new user object
        const newUser = {
            username,
            email,
            password: hashedPasswordForUser
        };
    }
    catch (error) 
    {

    }
    
    //save newUser data on the database
    newUser.save()
    .then(data => {
        console.log("New user has been added.");
    })
    .catch(error => {
        res.status(400).json({ error: err.message });
    })
    */
})


module.exports = router;