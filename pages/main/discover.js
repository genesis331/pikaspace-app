import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Discover() {
    return (
        <View style={styles.container}>
            <Text>Discover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: "center"
    }
});