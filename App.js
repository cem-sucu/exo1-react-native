import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            {
                age ? (

                    <Text>Je suis : {name} | age: {age}</Text>
                    ) : (
                        <Text>Je suis : {name}</Text> 
                    )
                }
                </View>
                );
            };

export default function App() {
    return (
        <View style={styles.text}>
            <Person name="Roger" />
            <Person name="Stan" />
            <Person name="Moris" age="14"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "red",
        marginTop: 50,
        flexDirection: "row",
        fontSize: 20,
        fontWeight: "bold",
    },
    wrapper: {
        backgroundColor: "green",
    },
    viewOne: {
        backgroundColor: "blue",
    },
    text: {
        color: "yellow",
        marginTop: 50,
        flexDirection: "row",
        fontSize: 20,
        fontWeight: "bold",
    },
});
