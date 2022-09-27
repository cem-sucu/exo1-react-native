import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Person = ({ name, age, children }) => {
    return (
        <View style={styles.container}>
            {age ? (
                <Text style={styles.container}>
                    Je suis : {name} | age: {age} | {children}
                </Text>
            ) : (
                <Text style={styles.container}>
                    Je suis : {name} | {children}
                </Text>
            )}
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.text}>
            <Person name="Roger">Alien</Person>
            <Person name="Stan">Human</Person>
            <Person name="Moris" age="14">
                Human
            </Person>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "red",
        marginTop: 50,
        flexDirection: "row",
        fontSize: 12,
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
        fontSize: 12,
        fontWeight: "bold",   
    },
});
