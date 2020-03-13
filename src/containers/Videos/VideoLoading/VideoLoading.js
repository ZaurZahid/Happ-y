import React from "react";
import classes from "./VideoLoading.css";

const VideoLoading = () => {
  return (
    <div className={classes.mainBox}> 
      loading
      <div className={classes.HeadingContent}>
        <h6 className={classes.VideoName}></h6>
        <div className={classes.authorPicture}> 
        <div></div>
        </div>
      </div>
    </div>
  );
};

export default VideoLoading;
