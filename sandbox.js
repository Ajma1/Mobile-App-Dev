import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Sandbox(){

    return(
        <View style={styles.container}>
            <Text style = {styles.boxOne}>one</Text>
            <Text style = {styles.boxTwo}>Two</Text>
            <Text style = {styles.boxThree}>three</Text>
            <Text style = {styles.boxFour}>Four</Text>
        </View>

    )
}

const styles= StyleSheet.create({
container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 's',
    backgroundColor: 'grey',
    paddingTop: 40,

},
boxOne:{
    backgroundColor: 'violet',
    padding: 10,
},
boxTwo:{
    backgroundColor: 'gold',
    padding: 10,
},
boxThree:{
    backgroundColor: 'coral',
    padding: 10,
},
boxFour:{
    backgroundColor: 'green',
    padding: 10,
},
})