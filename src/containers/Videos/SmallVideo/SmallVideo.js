import React from 'react';
import classes from './SmallVideo.css';

import SmallVideoLoading from '../SmallVideoLoading/SmallVideoLoading';

const SmallVideo = (prop) => {
  const cutText = (text, num) => {
    let newText = "";
    if (text.length > num) {
      newText = text.substr(0, num) + "...";
    } else {
      newText = text;
    }
    return newText;
  };
    // console.log(prop.status);
    let content = (
     <div className={classes.SmallVideos} key={prop.id} onClick={prop.goToVideo}>
        <img className={classes.SmallVideoImg} src={prop.img} alt="" />
        <div className={classes.SmallVideoAuthorHeading}>
          <h4 className={classes.SmallVideoAuthorName}>{prop.author}</h4>
          <h6 className={classes.SmallVideoName}>{cutText(prop.name,45)}</h6>
        </div>
      </div>
    )
    if (  typeof prop.status === "object" &&  prop.status.isLoading && prop.status.downloads === null  ) {
    content = <SmallVideoLoading/> 
      }
  return <React.Fragment>{content}</React.Fragment>;
}

export default SmallVideo;
