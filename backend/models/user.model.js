const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

userSchema.pre('save', async function (next) 
{
  const user = this;
  console.log("Just before saving before hashing  ", user.password);
  if (!user.isModified('password')) 
  {
      return next();
  }
  user.password = await bcrypt.hash(user.password, 8);
  console.log("Just before saving & after hashing", user.password);
  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;