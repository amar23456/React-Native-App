 import React from 'react';
 import {
      View,Text,StyleSheet,FlatList,
      TouchableOpacity} from 'react-native';
 import {withNavigation} from 'react-navigation';     
 import ResultsDetail from './resultsDetail';

    const ResultsList=({results,navigation})=>{
        
         return <View>
        <Text style={styles.title}> Post</Text> 
          <FlatList 
         
               data= {results}
               keyExtractor={(results)=>results.id.toString()}
               renderItem={ ({item}) => {
                    return <TouchableOpacity onPress={() =>
                    navigation.navigate('ResultsShow',{id:item.id})} >
                    <ResultsDetail result={item}  />
                              </TouchableOpacity>
             
          }
         }
        />
   
         </View>
            
      }
 const styles =StyleSheet.create({

      title:{
          fontSize:19,
          fontWeight:'bold'
      }

 });

 export default withNavigation(ResultsList);