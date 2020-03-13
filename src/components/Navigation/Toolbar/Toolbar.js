import React from "react";
import classes from "./Toolbar.css";
import Logo from "../Logo/Logo";
import DrawerToogle from "../SideDrawer/DrawerToogle/DrawerToogle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}> 
    <DrawerToogle opened={props.drawerToogleOpen} /> 
    <div className={classes.Logo}>
      <Logo />
    </div> 
    <div className={classes.Settings}> 
      :::
    </div>
  </header>
);

export default Toolbar;
