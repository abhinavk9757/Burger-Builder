import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = props => (
  <Aux>

    <Toolbar />
    <SideDrawer/>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
