import React from 'react';
import {TextInput, Text,View, StyleSheet,MaskedViewIOS} from 'react-native';

import {Feather} from '@expo/vector-icons'

const SearchBar =({term, onTermChange,onTermSubmit})=>{
 
    return (
    <View style={styles.background}>
       <Feather name='search' style={styles.icon}  />
       <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Search..'
            value={term}
            onChangeText={newTerm => onTermChange(newTerm) }
            onEndEditing={()=>onTermSubmit()} 
        />
     
    </View>
    )
}

   const styles =StyleSheet.create({
       background:{
          backgroundColor:"#F0EEEE",
          height:50,
          borderRadius:5,
          marginHorizontal:15,
          flexDirection:'row',
          marginTop:10
         
      },

     inputStyle:{
         borderColor:'black',
         borderWidth:1,
         flex:1
     },
     icon:{
         fontSize:35,
         alignSelf:'center',

     }
 });

export default SearchBar ;
