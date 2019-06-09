var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    value: String
  });

module.exports = mongoose.model('Number', schema);