const bcrypt = require ('bcrypt');

const compareHashPasswordOfUser = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = { compareHashPasswordOfUser };