import React, { useState } from "react";
import classes from "./Quote.css";
import Stats from "../../../components/Stats/Stats";
import Quote2 from "../Quote2/Quote2";
  
const Quote = (props) => {
  const hearted = () => {
    props.updateHeartedQuote(); 
  };

  let content = (
    <React.Fragment>
      {typeof props.status === "object" &&
      props.status.downloads === 200 &&
      props.dr === 0 ? (
        <hr className={classes.typeHr} />
      ) : (
        ""
      )}
      <div className={classes.Quotes}>
        <i className="fas fa-quote-left" id={classes.left}></i>
        <Stats status={props.status} />
        <i
          onClick={hearted}
          className={props.heart ? "fas fa-heart" : "far fa-heart"}
          id={classes.heart}
        ></i>
        <p className={classes.Quote}>{props.quote}</p>
        <strong className={classes.Author}> {props.author}</strong>
        <i className="fas fa-quote-right" id={classes.right}></i>
      </div>
      <hr className={classes.typeHr} />
    </React.Fragment>
  );
  if (  typeof props.status === "object" &&  props.status.isLoading && props.status.downloads === null  ) {
    content = <Quote2 /> 
  }
    return (
      <React.Fragment>
        {content} 
      </React.Fragment>
    );
}

export default Quote;
