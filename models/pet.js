const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = PetSchema;
