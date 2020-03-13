import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initBests } from "../../../store/actions";
import Box from "./Box/Box"; 
import Spinner from "../../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../axios-happy";
import BoxLoading from './BoxLoading/BoxLoading'
import {deletingBestsFromStore,deletingBestStatusFromStore} from "../../../store/actions";

const Loved = props => {
  useEffect(() => {
    props.onInitBests();
  }, []);
  useEffect(() => {//unmount olanda
    return ()=>{//BASQA SEHIFEYE KECENDE
      // console.log("unmount");
      setTimeout(() => {
        props.deletingBestsStore(); //current Quote-si temizle 
        props.deleteBestStatusFromStore()
        // props.deletingQuoteStatusFromStore(); //current statuslari temizle
      }, 2500);
    }
   }, []);
  const itemList = data => {
    var newBox = [];

    for (var key in data) {
      if (Object.keys(data[key]).length || key !== "events") {
        if (  typeof props.stats[key] === "object" &&  props.stats[key].isLoading && props.stats[key].downloads === null  ) {
          newBox.push(<BoxLoading key={key}/>);
        }else{
          newBox.push(<Box data={data[key]} key={key} header={key} status={props.stats}/>);
        }
      }
    } 
    return newBox;
  };

  let content = (
    <div id="contents"> {props.bests && itemList(props.bests)}</div>
  );
  if (props.loading) {
    content = props.error ? <h4>Bests Cant be loaded</h4> : <Spinner />;
  }  
  return <div>{content}</div>;
};

const mapStateToProps = state => {
  return {
    bests: state.bests.bests[0],
    loading: state.bests.loading,
    error: state.bests.error,
    stats:state.bestStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitBests: () => dispatch(initBests()),
    deletingBestsStore:()=>dispatch(deletingBestsFromStore()),
    deleteBestStatusFromStore:()=>dispatch(deletingBestStatusFromStore())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Loved,axios));
