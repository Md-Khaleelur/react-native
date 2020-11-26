import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
//import Icon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  //console.log(props.todo, "logging props");
  return (
    <View style={styles.listTile}>
      <Icon
        name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
        style={styles.leading}
        size={20}
        color="#000000"
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text style={styles.title}>{props.todo.name}</Text>
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="#AE0000"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginBottom:5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",

    borderRadius: 8,
    overflow: "hidden"
  },
  leading: {
    width: "10%"
  },
  title: {
    width: "80%",
    fontSize: 18
  },
  trailing: {
    width: "10%"
  }
});
