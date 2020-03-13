import React from 'react';
import classes from './BoxLoading.css';

const BoxLoading = () => {
  let content = (
    <React.Fragment> 
      <h4 className={classes.ItemsHeader}></h4>
      <div className={classes.Items}>
        <div className={classes.Item}></div>
        <div className={classes.Item}></div>
        <div className={classes.Item}></div>
      </div> 
    </React.Fragment>
  );
  return <div className={classes.Box}>{content}</div>;
}

export default BoxLoading;
