import React,{useState} from "react";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import Item from "../Item/Item";
import {updateHeartBests} from '../../../../store/actions'
import classes from "./Box.css";

const Box = props => {
  const [height,setHeight]=useState(false)
      const gotoPage=url=>{
    props.history.push(url)
  }
   const gotoPageItem=(url,id)=>{
    url==="quotes"?props.history.push(url):props.history.push(url+'/'+id)
  }
  const hearted=(url,id)=>{ 
    props.updateHearted(url,id)
   }
  const itemsList = data => {
    var newItems = [];
    for (var key in data) {
      const id=key;
      newItems.push(<Item item={data[key]} key={key} blur={height} updateHeartedBest={()=>hearted(props.header,id)} gotoPageItemFunc={()=>gotoPageItem(props.header,id)}/>);
  //  console.log(props.header,key)
    } 
    newItems=newItems.slice(0,5)
    return newItems;
  };
  let attachedClassItems = [classes.Items];
  if (height) {
    attachedClassItems = [classes.Items, classes.Open];
  } 
  let LengthOfObject=Object.keys(itemsList(props.data)).length
  let content = (
    <React.Fragment>
      <h4 className={classes.ItemsHeader}>{props.header}</h4>
      {LengthOfObject ?
      <div className={attachedClassItems.join(' ')}>
        {props.data && typeof props.data == "object" && itemsList(props.data)}
      </div> :null }
      <button onClick={()=>gotoPage(props.header)}>Add</button>
      {  LengthOfObject>=4  ?
      <button onClick={()=>setHeight(!height)} id={classes.All}>{height?'Close':'All'}</button>:''}
    </React.Fragment>
  );
 
  return <div className={classes.Box}>{content}</div>;
};

const mapDispatchToProps = dispatch => {
  return {
    updateHearted : (id,val) => dispatch(updateHeartBests(id,val)) 
  };
}; 
export default connect(null, mapDispatchToProps)(withRouter(Box));
 