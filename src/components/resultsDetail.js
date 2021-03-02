import React from 'react';
import {View, Image, Text , StyleSheet,FlatList} from 'react-native'

const ResultsDetail =({result}) =>{

    return <View style={styles.container}>
        <Image source={require('../components/download.jpg')} />
        <Text style={styles.name}>{result.title}</Text>
        <Text >{result.userId}Stars,{result.body}</Text>
    </View>
};

const styles =StyleSheet.create({
    container:{
     marginLeft: 15,
     marginTop:10
    },
    image:{
        width:250,
        borderRadius:4,
        height:120
    },
    name:{
        fontWeight:'bold',
        fontSize:20
    }
});

export default ResultsDetail;
