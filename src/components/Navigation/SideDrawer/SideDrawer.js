import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedClass = [classes.SideDrawer, classes.Close];
  if (props.showing) {
    attachedClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.showing} clicked={props.closed} />
      <div className={attachedClass.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
