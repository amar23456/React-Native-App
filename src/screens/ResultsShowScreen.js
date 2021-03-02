import React ,{useState,useEffect} from 'react'
import {View,Text ,StyleSheet,FlatList,Image} from 'react-native';
import ResultsDetail from '../components/resultsDetail';
import navigation from 'react-navigation'

const ResultsShowScreen =({navigation}) =>{
    const [result,setResult] =useState(null);
    
    const id =navigation.getParam('id');
      
    const getResult = async (id) =>{
        await fetch(`https://jsonplaceholder.typicode.com/photos/${id}/`)
        .then((response) => response.json())
        .then((res) => setResult(res))
    };
    
    useEffect(() => {
        getResult(4);
        
    }, []);
    
     console.log(result.url)
    return <View>
           <Image  style={styles.image}  source={{uri:result.url}} />
           <Text> Result Show</Text>
           </View>
}


const styles =StyleSheet.create({});

export default ResultsShowScreen;