import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App() {
    const [text, setText] = useState(" ");

    const [text2, setText2] = useState(" ");
    const handlePress = () => {
        setText2("bravo tu a cliqué sur le button 2");
    };

    const [name, setName] = useState("Je m'appel");
    const handlePress2 = (arg) => {
        setName(`Je m'appel ${arg}`);
    };

    const objet = {
        name: "spiderman",
        age: 17,
    };
    const [infos, setInfos] = useState(objet);

    return (
        <View style={styles.wrapper}>
            <Text>{text}</Text>
            <Text>{text2}</Text>
            <Text>{name}</Text>
            <Button
                title="button 1"
                onPress={() => setText("bravo tu a cliqué sur le button 1")}
            ></Button>
            <Button
                onPress={handlePress}
                title="button 2"
                color="red"
                accessibilityLabel="lire plus.."
            ></Button>
            <Button
                title="Vous êtes"
                onPress={() => handlePress2("Cem")}
            ></Button>
            <Text>Nom : {infos.name}</Text>
            <Text>Age : {infos.age}</Text>
            <Button title="changer super héro" onPress={()=> setInfos({name:"Hulk", age:"44"})}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
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
