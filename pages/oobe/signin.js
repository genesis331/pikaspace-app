import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}><Text style={{alignSelf: "center", color: "#fff"}}>This is the Sign In screen.</Text></View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0057AF',
        flex: 1,
        justifyContent: "center"
    },
});