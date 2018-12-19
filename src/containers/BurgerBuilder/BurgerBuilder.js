import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  meat: 10,
  cheese: 6,
  salad: 4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 40,
    purchasable : false,
  };

  purchasableButtonHandler = (currentState) => {
    let purchasable = currentState.totalPrice > 40 ? true : false ;
    this.setState({
      purchasable : purchasable
    })
  };

  addIngredientHandler = type => {
    let currentState = { ...this.state };
    currentState.ingredients[type] += 1;
    currentState.totalPrice = currentState.totalPrice + INGREDIENT_PRICE[type];
    this.setState(currentState);
    this.purchasableButtonHandler(currentState);
  };

  removeIngredientHandler = type => {
    let currentState = { ...this.state };
    if (currentState.ingredients[type] > 0) {
      currentState.ingredients[type] -= 1;
      currentState.totalPrice =
        currentState.totalPrice - INGREDIENT_PRICE[type];
      this.setState(currentState);
      this.purchasableButtonHandler(currentState);
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
