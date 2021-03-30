const path = require('path');
const express = require('express');
const axios = require('axios');
const db = require('../database');

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

      res.status(200).send(meal.data.meals);
    })
    .catch(err => {
      res.status(500).send('https://http.cat/500');
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})