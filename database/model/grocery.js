const mongoose = require('mongoose');
const db = require('../');

const grocerySchema = mongoose.Schema({
  mealName: {
    type: String,
    required: true
  },
  items: []
})

const Meal = mongoose.model('Meal', grocerySchema);

module.exports = Meal;