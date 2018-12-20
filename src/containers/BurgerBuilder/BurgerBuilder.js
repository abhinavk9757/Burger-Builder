import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: false,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('Thank You for buying! Visit Again.');
    this.setState({ purchasing: false });
  };

  purchasableButtonHandler = currentState => {
    let purchasable = currentState.totalPrice > 40 ? true : false;
    this.setState({
      purchasable: purchasable,
    });
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
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchaseOrder={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
