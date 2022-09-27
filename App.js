import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
    return (
        <View>
            <View style={styles.viewOne}>
                <Text style={styles.container}>hello</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.container}>hello</Text>
                <Text style={styles.container}>hello</Text>
            </View>
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
    wrapper: {
        backgroundColor: "green",
    },
    viewOne: {
        backgroundColor: "blue",
    }
});
