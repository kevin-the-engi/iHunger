import React from 'react';
import axios from 'axios';
import Random from './Random.jsx';
import List from './List.jsx';
import ListRecipe from './ListRecipe.jsx';
import styles from '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: [],
      ingredients: [],
      recipe: [],
      favorites: [],
      chosen: false
    }

    this.getMeal = this.getMeal.bind(this);
    this.chosen = this.chosen.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  componentDidMount() {

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

  postFavorites() {
    axios.post('favorite', this.state.favorites)
      .catch(err => {
        console.log(err);
      })
  }

  chosen() {
    this.setState({
      chosen: true
    })
  }

  addFavorite() {
    this.setState({
      favorites: [...this.state.favorite, meal]
    })
  }

  render() {
    const {meal, ingredients, recipe, chosen} = this.state;

    return(
      <div className="mainContainer">
        <div className="left">
          <Random meal={meal} getMeal={this.getMeal} chosen={this.chosen} addFavorite={this.addFavorite} />
        </div>

        <div className="center">
          {chosen ? <List meal={meal} ingredients={ingredients} /> : null}
        </div>

        <div className="right">
          {chosen ? <ListRecipe meal={meal} recipe={recipe} /> : null}
        </div>
      </div>
    )
  }
};

export default App;