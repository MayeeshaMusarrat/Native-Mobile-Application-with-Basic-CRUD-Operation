const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const { loginValidationForUser } = require('../../utils/AuthenticationUtil/authValidation/loginValidationForUser');
const { compareHashPasswordOfUser } = require('../../utils/AuthenticationUtil/hashPasswords/compareHashPassword');

/**** 
 *  Joi signup and login schemas check the validation of the variables.
 *  password field usage method:
 *  const validationResult = signupValidationSchema.validate({ username: 'mai', email: 'mai18@gmail.com', password: 'M@yeesha123!' });
 *****/

router.route ('/login').post(async (req,res) => {
    
    const { email, password } = req.body;
    try 
    {
        
    }
    catch (error) 
    {

    }
})

module.exports = router;