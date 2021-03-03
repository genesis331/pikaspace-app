import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function Discover() {
    return (
        <View style={styles.container}>
            <View style={styles.layers}>
                <View style={styles.searchBar}>
                    <View style={{ flex: 0.7 }}>
                        <TouchableOpacity style={styles.searchInput}>
                            <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 17, paddingLeft: 18 }}>
                                <AntDesign name="search1" size={19} color="black" />
                                &nbsp;&nbsp;Search
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 17, textAlign: "center" }}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    layers: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        flex: 1
    },
    searchBar: {
        paddingHorizontal: 35,
        marginTop: 100,
        flexDirection: "row",
        justifyContent: "center"
    },
    searchInput: {
        paddingVertical: 16,
        backgroundColor: "#C4C4C4",
        borderTopLeftRadius: 21
    },
    searchButton: {
        paddingVertical: 16,
        backgroundColor: "#E8E8E8",
        borderBottomRightRadius: 21
    }
});