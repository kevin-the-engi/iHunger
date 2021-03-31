const mongoose = require('mongoose');
const db = require('../');

const mealsSchema = mongoose.Schema({
  mealName: {
    type: String,
    required: true
  },
  items: []
})

const Meal = mongoose.model('Meal', mealsSchema);

module.exports = Meal;