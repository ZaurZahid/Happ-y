import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./FooterNavigationItem.css";

const FooterNavigationItem = (props) => (
  <li className={classes.FooterNavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
    <i className={props.icon}></i>  
    </NavLink>
  </li>
);

export default FooterNavigationItem;
