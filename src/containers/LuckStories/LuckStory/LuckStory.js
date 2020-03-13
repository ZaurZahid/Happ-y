import React from "react";
import classes from "./LuckStory.css";

const LuckStory = (props) => {
  return (
    <div className={classes.mainBox}>
      <div className={classes.ReadText} onClick={props.goToLuckStory}>
        Read
      </div>
      <img
        src={props.img_url}
        alt=""
      />
      <div className={classes.HeadingContent}>
        The success story of <span>{props.name}</span>
      </div>
    </div>
  );
};

export default LuckStory;
