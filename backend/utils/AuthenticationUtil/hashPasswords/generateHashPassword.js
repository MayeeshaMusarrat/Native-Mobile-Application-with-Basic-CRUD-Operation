const bcrypt = require ('bcrypt');
const RECOMMENDED_SALT = 10;

const generateHashPasswordForUser = async (password) => {
    const saltRounds = RECOMMENDED_SALT;
    return bcrypt.hash(password, saltRounds);
}

module.exports = { generateHashPasswordForUser };