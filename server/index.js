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
      res.status(200).send(meal.data.meals[0])
    })
    .catch(err => {
      res.status(500).send('https://http.cat/500');
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})