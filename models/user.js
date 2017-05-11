const mongoose = require('mongoose');
const Pet = require('./pet');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
    }
  },
  firstName: {
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  pets: [Pet],
});

UserSchema.pre('save', (next) => {
  console.log('I am just about to save!');
  next();
});

UserSchema.methods.sayHello = () => {
  console.log('This is the instance method!');
};

UserSchema.statics.sayHello = () => {
  console.log('This is the static method!');
};

module.exports = UserSchema;
