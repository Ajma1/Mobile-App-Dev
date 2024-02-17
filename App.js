import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoList from './components/todoitems';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';


export default function App() {


  const [todos, setTodos] = useState(
    [
      {text: 'Meet Maha', key: '1'},
      {text: 'get tea', key: '2'},
      {text: 'Net Ninja', key: '3'},
      {text: 'work on app', key: '4'},
      {text: 'lunch', key: '5'},
    ]
  );
const pressHandler  = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  });
}

const submithandler = (text) => {

  if(text.length > 3){
    setTodos((prevTodos =>{
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    } ))
  }
  else{
    Alert.alert('Error','Please enter more than three characters', 
    {text: 'Okay', onPress: ()=> console.log('Alert consoled')});
  }

}

  return (

   <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss();}}>
    <View style={styles.container}>
     <Header/>

      <View style={styles.content}> 
        <AddTodo submithandler={submithandler}/>

        <View style={styles.list}>
          <FlatList
           data = {todos}
            renderItem={({item})=> (
             <TodoList item = {item} pressHandler={pressHandler}/>                
           )}

         />
        </View>

     </View>
    </View>
   </TouchableWithoutFeedback> 

    //<Sandbox />  

     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
    //backgroundColor: 'chocolate'
  },
  list:{
    marginTop: 20,
   // backgroundColor: 'pink',
    flex: 1,

  }
});
