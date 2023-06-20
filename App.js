import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { View, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

export default function App() {

  const [ todos, setTodos ] = useState([
    { text: 'buy coffee', key: "1", complete: false},
    { text: 'create an app', key: "2", complete: false},
    { text: 'play on the switch', key: "3", complete: false},
  ])

  function deleteTodo(key){
    setTodos(prevTodos => prevTodos.filter(todo => todo.key != key))
  }

  function addTodo(todoText){
    const newTodo = {
      text: todoText, 
      key: Math.random().toString()
    }
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function markComplete(key){
    const updatedTodos = todos;
    updatedTodos.forEach(todo => {
      if(todo.key === key){
        todo.complete = !todo.complete;
      }
    });
    setTodos(_prevTodos => [...updatedTodos]);
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo handleSubmit={addTodo}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => <TodoItem item={item} deleteTodo={deleteTodo} markComplete={markComplete}/>}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  content:{
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex:1
  },
  list:{
    marginTop:10,
    flex:1
  }
})
