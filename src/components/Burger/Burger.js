import React from 'react';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = props => (
  <div className={classes.Burger}>
    <BurgerIngredients type="bread-top" />
    <BurgerIngredients type="cheese" />
    <BurgerIngredients type="meat" />
    <BurgerIngredients type="salad" />
    <BurgerIngredients type="bread-bottom" />
  </div>
);

export default burger;
