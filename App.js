import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function App() {
    const obj = [
        {
            id: "1",
            name: "stan",
            age: 45,
        },
        {
            id: "2",
            name: "francine",
            age: 25,
        },
        {
            id: "3",
            name: "hayley",
            age: 15,
        },
        {
            id: "4",
            name: "steve",
            age: 85,
        },
        {
            id: "5",
            name: "roger",
            age: 45,
        },
        {
            id: "6",
            name: "federer",
            age: 17,
        },
        {
            id: "7",
            name: "kiki",
            age: 10,
        },
        {
            id: "8",
            name: "lopi",
            age: 22,
        },
        {
            id: "9",
            name: "blob",
            age: 55,
        },
        {
            id: "10",
            name: "kasan",
            age: 47,
        },
    ];
    const [family, setFamily] = useState(obj);

    const renderItem = ({ item }) => (
        <View style={styles.viewList}>
            <Text style={styles.text}>Nom : {item.name}</Text>
            <Text style={styles.text}>Age : {item.age}</Text>
        </View>
    );

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={family}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { padding: 20 },
    viewList: { marginTop: 30, backgroundColor: "purple", padding: 19 },
    text: { color: "white", fontSize: 24 },
});
