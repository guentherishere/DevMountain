var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Item', itemSchema);
