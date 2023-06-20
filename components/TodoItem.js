import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, deleteTodo, markComplete }){
    return(
        <TouchableOpacity onPress={()=> markComplete(item.key)}>
            <View style={styles.todoItem}>
                <Text style={item.complete ? {textDecorationLine: "line-through"} : null}>{item.text}</Text>
                <MaterialIcons name="delete" size={24}  onPress={() => deleteTodo(item.key)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem:{
        padding:10,
        borderColor:'#bbb',
        borderStyle:"dotted",
        borderRadius:10,
        borderWidth:1,
        marginBottom:10,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text:{
        textDecorationLine: "line-through"
    }
})