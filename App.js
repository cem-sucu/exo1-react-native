import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {

    const getNames = (firstName, secondName, thirdName)=> {
        // return firstName + " " + secondName + " " + thirdName;
        return `${firstName} ${secondName} ${thirdName}`;
    }
    return (
        <Text style={styles.text}>
            je m'appel {getNames("Capitaine", "Jack", "Sparrow")}
        </Text>
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
