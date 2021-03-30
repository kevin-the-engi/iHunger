import React from 'react';
import axios from 'axios';
import Random from './Random.jsx';
import List from './List.jsx';
import Recipe from './Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {},
      chosen: false
    }

    this.getMeal = this.getMeal.bind(this);
  }

  getMeal() {
    axios.get('/random')
      .then(meal => {
        this.setState({
          meal: meal.data
        })
      })
  }

  render() {
    const {meal} = this.state;

    return(
      <div>
        <Random meal={meal} getMeal={this.getMeal} />
        <List />
        <Recipe />
      </div>
    )
  }
};

export default App;