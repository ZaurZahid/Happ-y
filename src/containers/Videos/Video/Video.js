import React from "react";
import classes from "./Video.css";
import VideoLoading from "../VideoLoading/VideoLoading"; 

const Video = props => {
  const cutText = (text, num) => {
    let newText = "";
    if (text.length > num) {
      newText = text.substr(0, num) + "...";
    } else {
      newText = text;
    }
    return newText;
  };
  let content = (
    <div className={classes.mainBox}>
      <div className={classes.Watch} onClick={props.goToVideo}>Watch</div>
      <img src={props.img_url} alt="" id={classes.auth_img}/>
      <div className={classes.HeadingContent}>
        <h6 className={classes.VideoName}>{cutText(props.name,50)}</h6>
        <div className={classes.authorPicture}>
          <img title={props.author} src={props.author_img} alt=""  />
        </div>
      </div>
    </div>
  );
  if (  typeof props.status === "object" &&  props.status.isLoading && props.status.downloads === null  ) {
    content = <VideoLoading/> 
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default Video;
