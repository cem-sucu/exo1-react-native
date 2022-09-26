import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
    return (
        <View>
            <Text style={styles.container}>hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "red",
        marginTop: 50,
        flexDirection: "row",
        fontSize: 20,
    },
});
