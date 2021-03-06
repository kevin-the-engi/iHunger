import React from 'react';
import axios from 'axios';
import Random from './Random.jsx';
import List from './List.jsx';
import ListRecipe from './ListRecipe.jsx';
import ListFavorites from './ListFavorites.jsx';
import styles from '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: [],
      ingredients: [],
      recipe: [],
      favorites: [],
      displayFavorites: false,
      chosen: false
    }

    this.getMeal = this.getMeal.bind(this);
    this.chosen = this.chosen.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.switchTo = this.switchTo.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
  }

  getMeal() {
    axios.get('/random')
      .then(meal => {
        this.setState({
          meal: meal.data,
          ingredients: meal.data[0].ingredients,
          recipe: meal.data[0].strInstructions
        })
      })
  }

  getFavorites() {
    axios.get('/favorite')
      .then(favorites => {
        this.setState({
          favorites: favorites.data
        })
      })
  }

  addFavorite() {
    let meal = {
      mealName: this.state.meal[0].strMeal,
      items: this.state.meal[0]
    }

    axios.post('/favorite', meal)
      .then(() => {
        this.getFavorites();
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteFavorite(mealID) {
    let meal = {
      '_id': mealID
    }

    axios.delete('/favorite', { data: meal })
      .then(() => {
        this.getFavorites();
      })
      .catch(err => {
        console.log(err);
      })
  }

  chosen() {
    this.setState({
      chosen: !this.state.chosen
    })
  }

  showFavorites() {
    this.setState({
      displayFavorites: !this.state.displayFavorites
    })
  }

  switchTo(favorite) {
    console.log(favorite)
    this.setState({
      meal: favorite,
      ingredients: favorite[0].ingredients,
      recipe: favorite[0].strInstructions
    })
  }

  render() {
    const {meal, ingredients, recipe, favorites, chosen, displayFavorites} = this.state;

    return(
      <div className="mainContainer">
        <div className={displayFavorites ? "side" : "hide"}>
          <h4 className="title">Favorites</h4>
          {displayFavorites ?
            <ListFavorites favorites={favorites} switchTo={this.switchTo} remove={this.deleteFavorite} /> : null
          }
        </div>

        <div className="left">
          <Random meal={meal} getMeal={this.getMeal} chosen={this.chosen} addFavorite={this.addFavorite} favorites={favorites} showFavorites={this.showFavorites}/>
        </div>

        <div className={chosen ? "center" : "hide"}>
          <h4 className="title">Ingredients</h4>
          {chosen ? <List meal={meal} ingredients={ingredients} /> : null}
        </div>

        <div className={chosen ? "right" : "hide"}>
          <h4 className="title">Recipe</h4>
          {chosen ? <ListRecipe meal={meal} recipe={recipe} /> : null}
        </div>
      </div>
    )
  }
};

export default App;