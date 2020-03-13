import React from "react";
import classes from "./DrawerToogle.css";

const DrawerToogle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.opened}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToogle;
