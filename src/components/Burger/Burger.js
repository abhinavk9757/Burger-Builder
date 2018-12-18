import React from 'react';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey =>
      [...Array(props.ingredients[ingredientKey])].map((_, index) => (
        <BurgerIngredients key={ingredientKey + index} type={ingredientKey} />
      )),
    )
    .reduce((acc, element) => {
      return acc.concat(element);
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Start adding your favourite Ingredients!</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
