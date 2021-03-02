import React from "react";

import {useState,useEffect}  from 'react';

export default () =>{ 
     const [results,setResults] = useState([]);
     const [errorMessage,setErrorMessage]= useState('');
     
     
   const searchApi=async () =>{
      fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((res)   => setResults(res))
         
       }     
   
   useEffect(()=>{
     searchApi();
     },[])
return [searchApi,results,errorMessage];
};