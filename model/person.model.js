const mongoose = require('./index.js');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  fullName: {type: String, required: true},
  description: String,
  job: String,
  placeOfEduaction: String,
  nativeLanguage: String,
  country: {type: String, required: true},
  father: String,
  mother: String,
  spouse: String,
  birthDate: Date,
  deathDate: Date,
  birthPlace: String,
  deathPlace: String, 
  deathMethod: String,
  deathReason: String,
}, {autoCreate: true});

module.exports = mongoose.model('Person',personSchema);