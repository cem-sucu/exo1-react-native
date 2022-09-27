import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App() {
    return (
        <View style={styles.wrapper}>
            <Button
                title="cliquez ici"
                color="red"
                accessibilityLabel="lire plus.."
                disabled
            />
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
        marginTop: 50,
        fontSize: 20,
    },
    viewOne: {
        backgroundColor: "blue",
    },
    text: {
        fontFamily: "serif",
        fontSize: 20,
        fontWeight: "bold",
    },
});
