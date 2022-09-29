import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
    const obj = [
        {
            id: 1,
            name: "stan",
            age: 45,
        },
        {
            id: 2,
            name: "francine",
            age: 25,
        },
        {
            id: 3,
            name: "hayley",
            age: 15,
        },
        {
            id: 4,
            name: "steve",
            age: 85,
        },
        {
            id: 5,
            name: "roger",
            age: 45,
        },
        {
            id: 6,
            name: "klaus",
            age: 35,
        },
    ];
    const [family, setFamily] = useState(obj);

    return (
        <View style={styles.wrapper}>
            <ScrollView>
                {family.map((member) => {
                    return (
                        <View key={member.id} style={styles.viewList}>
                            <Text style={styles.text}>Nom : {member.name}</Text>
                            <Text style={styles.text}>Age : {member.age}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { padding: 20 },
    viewList: { marginTop: 30, backgroundColor: "purple", padding: 19 },
    text: { color: "white", fontSize: 24 },
});
