import React from "react";
import classes from "./SortBy.css";

const SortBy = () => {
  return (
    <div className={classes.SortDiv}> 
    <h5>Sort by:  </h5>
        <select className= {classes.Sel} /* value="newest" */ > 
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="most-viewed">Most Viewed</option>
        </select>
      </div>   
  );
}; 
export default SortBy;
