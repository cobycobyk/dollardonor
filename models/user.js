const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  bio: {type: String, default: 'I am a Dollar Donor'},
  avatar:{type: String, default: "https://i.imgur.com/T7GiuOc.png"},
  state: {type: String, default: ''},
  zipcode: {type: Number, default: 92109},
  isAdmin: {type: Boolean, default: false},
  isMarketer: {type: Boolean, default: false},
  isAccountant: {type: Boolean, default: false},
  website: {type: String, default: 'www.dollardonor.com'}
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', function(next) {
  //Save the reference to the user doc
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    //update the password property with the hash
    user.password = hash;
    return next();
  });
});

module.exports = mongoose.model('User', userSchema);