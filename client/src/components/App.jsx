import React from 'react';
import axios from 'axios';
import Random from './Random.jsx';
import List from './List.jsx';
import ListRecipe from './ListRecipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: [],
      ingredients: [],
      recipe: [],
      chosen: false
    }

    this.getMeal = this.getMeal.bind(this);
    this.chosen = this.chosen.bind(this);
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

  chosen() {
    this.setState({
      chosen: true
    })
  }

  render() {
    const {meal, ingredients, recipe, chosen} = this.state;

    return(
      <div>
        <div className="left">
          {chosen ? <List meal={meal} ingredients={ingredients}/> : null}
        </div>

        <div className="middle">
          <Random meal={meal} getMeal={this.getMeal} chosen={this.chosen} />
        </div>

        <div className="right">
          {chosen ? <ListRecipe meal={meal} recipe={recipe} /> : null}
        </div>
      </div>
    )
  }
};

export default App;