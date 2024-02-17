import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function Header(){
    return(
        <View style={styles.Header}>
            <Text style= {styles.title}>My todos</Text>
        </View>
    
    );
} 

const styles = StyleSheet.create({
    Header:{
        height: 80,
        paddingTop:38,
        backgroundColor: 'coral'
    },
    title:{
        textAlign:'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

});