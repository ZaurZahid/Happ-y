import React, { useState,useEffect } from "react";
import {connect} from 'react-redux'
// import { useDispatch, useSelector } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import Quote from "./Quote/Quote";

import axios from "../../axios-happy";

import classes from "./Quotes.css";
import { initQuotes,
  deletingQuotesStatusFromStore,
  deletingQuotesFromStore,updateHeartQuote } from "../../store/actions"; /* action */

const Quotes = props => {
  useEffect(() => {
    props.onInitQuotes();
  }, []); 
 
  useEffect(() => {//unmount olanda
    return ()=>{//BASQA SEHIFEYE KECENDE
      // console.log("unmount");
      setTimeout(() => {
        props.deletingQuoteStore(); //current Quote-si temizle 
        props.deletingQuoteStatusFromStore(); //current statuslari temizle
      }, 2500);
    }
   }, []);
   const hearted=(id,val)=>{
    props.updateHeartedQuote(id,val)
   }
//mene connect rahatdi
  // const dispatch = useDispatch();
  // const onInitQuotes = () => dispatch(initQuotes());

  // const quotes = useSelector(state => {
  //   //bu ise sadece menim funcumun adidi
  //   return state.quotes.quotes; //quotes reducerinin icindeki quotes state
  // });
  // const error = useSelector(state => {
  //   return state.quotes.error;
  // });
  // const loading = useSelector(state => {
  //   return state.quotes.loading;
  // });
   /*  // {console.log(props.stats[qvot.id])} */ 
  let quoteSummary = (
    <React.Fragment>
      {props.quotes.map((qvot,index) =>   
        <Quote key={qvot.id} dr={index} updateHeartedQuote={()=>hearted(qvot.id,!qvot.heart)} author={qvot.author} quote={qvot.quote} status={props.stats[qvot.id]} heart={qvot.heart}/*  loading={props.stats[qvot.id[isLoading]]} */ />
        )}
    </React.Fragment>
  );
  if (props.loading) {
    quoteSummary = props.error ? <h4>Quotes Cant be loaded</h4> : <Spinner />;
    // quoteSummary = props.error ? <h4>Quotes Cant be loaded</h4> : <Quote2 />;
  }
  return <div className={classes.containerFluid}>{quoteSummary}</div>;
};
const mapStateToProps=state=>{
  return {
    quotes: state.quotes.quotes,
    error: state.quotes.error,
    loading: state.quotes.loading ,
    stats:state.quoteStatus 
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    onInitQuotes : () => dispatch(initQuotes()),
    updateHeartedQuote : (id,val) => dispatch(updateHeartQuote(id,val)), 
    deletingQuoteStatusFromStore: () => dispatch(deletingQuotesStatusFromStore()),
    deletingQuoteStore: () => dispatch(deletingQuotesFromStore())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Quotes, axios));
