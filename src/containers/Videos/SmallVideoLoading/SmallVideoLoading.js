import React from "react";
import classes from "./SmallVideoLoading.css";

const SmallVideoLoading = () => {
  return (
    <div className={classes.SmallVideos} >
    <div className={classes.SmallVideoImg }>loading</div>
    <div className={classes.SmallVideoAuthorHeading}>
      <h4 className={classes.SmallVideoAuthorName}> </h4>
      <h6 className={classes.SmallVideoName}> </h6>
    </div>
  </div>
  );
};

export default SmallVideoLoading;
