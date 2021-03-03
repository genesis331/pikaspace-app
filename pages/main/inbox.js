import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Inbox() {
    return (
        <View style={styles.container}>
            <View style={styles.layers}>
                <SafeAreaView>
                    <View style={styles.screenTitle}>
                        <Text style={styles.screenTitleText}>Inbox</Text>
                    </View>
                    <View style={styles.tabView}>
                        <View style={styles.tabsContainer}>
                            <TouchableOpacity style={{ backgroundColor: "#20517C", paddingHorizontal: 16, paddingVertical: 6, borderRadius: 50, marginRight: 12 }}>
                                <Text style={{ color: "white", fontFamily: 'MadeTommyMedium', fontSize: 16 }}>Notifications</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 14, paddingVertical: 6 }}>
                                <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 16 }}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.bodyContainer}>
                            <View>
                                <View style={styles.blankNoti}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 14 }}>No new notification.</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
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
    screenTitle: {
        paddingHorizontal: 40,
        marginTop: 45
    },
    screenTitleText: {
        fontFamily: 'MadeTommyMedium',
        fontSize: 40
    },
    tabsContainer: {
        marginTop: 18,
        paddingHorizontal: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    bodyContainer: {
        marginTop: 14,
        paddingHorizontal: 40,
    },
    blankNoti: {
        paddingVertical: 80,
        alignItems: "center"
    }
});