import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  // { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Total Price : ₹{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(control => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.added(control.type)}
            removed={() => props.removed(control.type)}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchaseOrder}
      >
        PURCHASE
      </button>
    </div>
  );
};

export default buildControls;
