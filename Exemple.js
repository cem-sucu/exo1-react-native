import React, { useEffect } from "react";
import { Keyboard, StyleSheet, TextInput } from "react-native";

const Exemple = () => {
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
            Keyboard.removeAllListeners("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeAllListeners("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        alert("veuillez compléter");
    };
    const _keyboardDidHide = () => {
        alert("Merci d'avoir complété");
    };
    return (
        <TextInput style={styles.input} onSubmitEditing={Keyboard.dismiss} />
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 60,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 2,
        backgroundColor: "#fff",
    },
});

export default Exemple;
