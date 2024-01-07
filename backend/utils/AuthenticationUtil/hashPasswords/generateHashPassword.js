const bcrypt = require('bcrypt');
const RECOMMENDED_SALT = 10;

const generateHashPasswordForUser = async (password) => {
  const saltRounds = RECOMMENDED_SALT;
  try 
  {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } 
  catch (error) 
  {
    throw new Error('Error generating hashed password');
  }
};

module.exports = { generateHashPasswordForUser };