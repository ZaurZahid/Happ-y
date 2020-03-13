import React, { useState } from "react";
import classes from "./Quote2.css";

let content=[]
for (let i = 0; i < 3; i++) {  
}
const Quote2 = props => {
 
  return (
    <React.Fragment>
      <div className={classes.Quotes2}>
        <i className="fas fa-quote-left" id={classes.left}></i> 
        <i  className= "fas fa-heart"   
          id={classes.heart} ></i> 
        <p className={classes.Quote}> <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{fontSize:"18px",color:'rgba(0, 0, 0, 0.56)'}}></i>loading</p>
        <i className="fas fa-quote-right" id={classes.right}></i>
      </div> 
    </React.Fragment>
  );
};

export default Quote2;
