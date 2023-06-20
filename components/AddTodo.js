import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddTodo({handleSubmit}){
    
    const [textInput, setTextInput] = useState("");

    function handleSubmitSuper(){
        if(textInput.length > 3){
            handleSubmit(textInput);
            setTextInput("");
        }else{
            Alert.alert("Sorry","\ntext too short",[
                {text:"OK"}
            ])
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={newText => setTextInput(newText)}
                value={textInput}
            />
            <Button
                onPress={handleSubmitSuper}
                title="Add"
                color="coral"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    }
})