import React,{useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import useResults from'../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList'
 

 const SearchScreen =()=>{
    const [term,setTerm]= useState('');
    const [searchApi,results,errorMessage]= useResults();
   
    
    
     return (

     <View style={{flex:1}} >
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={()=> searchApi(term)} 
       />
          {errorMessage ? <Text>{errorMessage}</Text>:null}
          <Text>  We have found {results.length} results</Text>
          <ResultsList results={results}  />
         

     </View>
    )
}

export default SearchScreen ;
