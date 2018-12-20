import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const orderedIngredientList = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}> {igKey} </span>:{' '}
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order :</h3>
      <ul>{orderedIngredientList}</ul>
      <p>
        <strong>Total Price : ₹{props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Checkout
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
    </Aux>
  );
};

export default orderSummary;
