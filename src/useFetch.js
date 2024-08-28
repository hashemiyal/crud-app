import { useState,useEffect } from "react";
const useFetch = (url) => {
    let [data,setData]=useState(null);
    let [isPending,setIsPending]=useState(true);
    let [error,setError]=useState(null);
    useEffect(()=>{
        setTimeout(() => {
           fetch(url).then((res)=>{
               if(!res.ok){
                  throw Error('could not fetch the data!');
               }
              
               return res.json();
               }).then((data)=>{
                setData(data);
                setIsPending(false);
                
               }).catch((err)=>{
                  setError(err.message);
                  setIsPending(false);
               });
                  
        }, 1000);
       
        },[url]);
        return {data,isPending,error};
}
 
export default useFetch;