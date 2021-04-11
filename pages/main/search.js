import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.layers}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.searchBar}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={styles.searchInput}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 17, paddingLeft: 18 }}>
                                        <AntDesign name="search1" size={19} color="black" />
                                        &nbsp;&nbsp;Search
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.screenTitle}>
                            <Text style={styles.screenTitleText}>Search</Text>
                        </View>
                        <ScrollView style={{
                            paddingHorizontal: 40,
                            marginTop: 60
                        }}>
                            <Text style={{ fontFamily: 'MadeTommyRegular' }}>No search history.</Text>
                        </ScrollView>
                    </ScrollView>
                </SafeAreaView>
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
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    searchInput: {
        paddingVertical: 16,
        backgroundColor: "#C4C4C4",
        borderTopLeftRadius: 21,
        borderBottomRightRadius: 21
    },
    screenTitle: {
        paddingHorizontal: 40,
        marginTop: 60
    },
    screenTitleText: {
        fontFamily: 'MadeTommyMedium',
        fontSize: 40
    },
});