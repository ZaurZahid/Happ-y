import React, { useState,useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrapperComponent, axios) => {
  return props=>{
    const [error,setError]=useState(null)
   
   const myReqInterceptor = axios.interceptors.request.use((req) => {//evvel componentWillMount idi indi eger bele yazsaq duzdu cunki bu func-lar esas return dan evvel islenir
      setError(null);
      return req;
    });
   const myResInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error); //eger response da error olarsa modali gostericey
      }
    );
    useEffect(()=> {
      //basqa sehifelerde isledende bos-bosuna yer tutmamaq ucun,cunki isledirik ve her defe yaddasa yuklenir bunlari temizlemek lazimdi islendenden sonra
      // for removing an interceptor  ( yadindadir UseIntervalda da buna gore clearSetInterval edirik)
      return ()=>{//componentWillUnmountu bele edirik hookla
        // console.log("unmount");  //hemin sehifeden cixanda unmount eliyir componenti silir ele bil
        axios.interceptors.request.eject(myReqInterceptor);
        axios.interceptors.response.eject(myResInterceptor);
      }
    },[myReqInterceptor,myResInterceptor])

    const errorConfirmed = () => {
      setError(null);
    }; 
      return (
        <React.Fragment>
          <Modal show={error} modalClosed={errorConfirmed}>
            {error ? error.message : null}
          </Modal>
          <WrapperComponent {...props} />
        </React.Fragment>
      );
    } 
};

export default withErrorHandler;
