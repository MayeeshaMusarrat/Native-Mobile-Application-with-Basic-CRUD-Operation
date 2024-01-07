const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const { loginValidationForUser } = require('../../utils/AuthenticationUtil/authValidation/loginValidationForUser');
const { compareHashPasswordOfUser } = require('../../utils/AuthenticationUtil/hashPasswords/compareHashPassword');

router.post('/', async (req, res) => {
  try 
  {
    
  } 
  catch (error) 
  {
    console.error('Error during user insertion:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
