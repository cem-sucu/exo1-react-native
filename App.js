import React from "react";
import { View, StyleSheet } from "react-native";
import Exemple from "./Exemple";

export default function App() {
    return (
        <View style={styles.container}>
            <Exemple />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        marginTop: 20,
    },
});
