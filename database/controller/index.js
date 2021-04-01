const Meal = require('../model/meals.js');

const createMeal = (meal, callback) => {
  const newMeal = new Meal(meal);

  newMeal.save(err => {
    if (err) {
      callback(err, null);
    } else {
      callback(null);
    }
  })
}

const readMeals = (callback) => {
  Meal.find({}, (err, favorites) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, favorites);
    }
  })
}

const deleteMeal = (meal, callback) => {
  Meal.deleteOne(meal, err => {
    if (err) {
      callback(err, null);
    } else {
      callback(null);
    }
  })
}

const deleteAll = (callback) => {
  Meal.deleteMany({}, err => {
    if (err) {
      callback(err, null);
    } else {
      callback(null);
    }
  })
}

module.exports = {
  createMeal,
  readMeals,
  deleteMeal,
  deleteAll
}