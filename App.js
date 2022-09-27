import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function App() {
    const [name, setName] = useState();
    const [age, setAge] = useState();

    

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Nom : {name}</Text>
            <TextInput
                placeholder="indiquez votre nom"
                style={styles.textInput}
                onChangeText={(val) => setName(val)}
            />
            <Text style={styles.text}>Age : {age} ans</Text>
            <TextInput
                placeholder="indiquez votre age"
                style={styles.textInput}
                onChangeText={(val) => setAge(val)}
                keyboardType="numeric"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        backgroundColor: "red",
        alignItems: "center",
        height: 220,
    },
    textInput: {
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        padding: 10,
        margin: 9,
        width: "90%",
    },
    text: {
        fontSize: 20,
    },
});
