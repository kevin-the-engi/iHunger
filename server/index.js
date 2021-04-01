const path = require('path');
const express = require('express');
const axios = require('axios');
const db = require('../database');
const controller = require('../database/controller');

const app = express();
const port = 3000;
const API = "https://www.themealdb.com/api/json/v1/1/random.php";

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/random', (req, res) => {
  axios.get(API)
    .then(meal => {
      let ingredients = [];
      let i = 1;
      let item = meal.data.meals[0];
      let instructions = item.strInstructions.split('\r\n').filter(item => item !== '');
      let ytID = item.strYoutube.split('=')[1];

      while(item[`strIngredient${i}`] !== '') {
        const ingredient = item[`strIngredient${i}`];
        const measure = item[`strMeasure${i}`];
        const ingredientObj = {
          ingredient: [ingredient],
          measure: [measure]
        };

        ingredients.push(ingredientObj);
        i++;
      }

      meal.data.meals[0].ingredients = ingredients;
      meal.data.meals[0].strInstructions = instructions;
      meal.data.meals[0].ytID = ytID;

      res.status(200).send(meal.data.meals);
    })
    .catch(err => {
      res.sendStatus(500);
    })
})

app.get('/favorite', (req, res) => {
  controller.readMeals((err, favorites) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(favorites);
    }
  })
})

app.post('/favorite', (req, res) => {
  controller.createMeal(req.body, err => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
})

app.delete('/favorite', (req, res) => {
  controller.deleteMeal(req.body, err => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
});

app.delete('/removeAll', (req, res) => {
  controller.deleteAll(err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})