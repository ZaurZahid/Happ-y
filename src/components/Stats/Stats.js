import React from "react";
const Stats = ({ status }) => {
  if (!status) {
    return <span className="stats">Loading....</span>;
  }
  return (
    <React.Fragment> 
      {status.error && "error"}
      {status.downloads !== null && ""}
      {status.isLoading &&  <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>} 
    </React.Fragment>
  );
};

export default Stats;
