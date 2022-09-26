import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{count}</Text>
            <Button onPress={() => setCount(count + 1)} title="+1" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    counter: {
        fontSize: 40,
    },
});
