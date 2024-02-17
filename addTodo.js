import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
//import { TextInput } from 'react-native-web';


export default function AddTodo({submithandler}){
const [text, setText] = useState('');

const changeHandler = (val) => {
    setText(val);
}
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder = 'new todo...'
                onChangeText={changeHandler}
            />
                <Button onPress={()=> submithandler(text)} title='add todo' color='coral' />
        </View>
    )
}
const styles=StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBlockColor: '#ddd'
    }
})