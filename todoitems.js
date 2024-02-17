import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoList({item, pressHandler}){

    return(

        <TouchableOpacity onPress={() =>pressHandler(item.key)}>
        <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <MaterialIcons name= 'delete' size={20} color='#333' />

        </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        borderStyle:'dashed',
        borderRadius:   10,

    },
    itemText:{
        marginLeft:10,
        marginRight: 10,

    },

})