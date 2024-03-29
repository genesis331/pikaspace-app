import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Inbox() {
    const [switchTab, setSwitchTab] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.layers}>
                <SafeAreaView>
                    <View style={styles.screenTitle}>
                        <Text style={styles.screenTitleText}>Inbox</Text>
                    </View>
                    <View style={styles.tabView}>
                        <View style={styles.tabsContainer}>
                            <TouchableOpacity 
                                style={{ paddingHorizontal: 16, paddingVertical: 6, borderRadius: 50, marginRight: 12, backgroundColor: switchTab == 0 ? "#20517C" : "#fff" }}
                                onPress={() => {
                                    setSwitchTab(0);
                                }}
                            >
                                <Text style={{ color: switchTab == 0 ? "white" : "black", fontFamily: 'MadeTommyMedium', fontSize: 16 }}>Notifications</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{ paddingHorizontal: 16, paddingVertical: 6, borderRadius: 50, marginRight: 12, backgroundColor: switchTab == 1 ? "#20517C" : "#fff" }}
                                onPress={() => {
                                    setSwitchTab(1);
                                }}    
                            >
                                <Text style={{ color: switchTab == 1 ? "white" : "black", fontFamily: 'MadeTommyMedium', fontSize: 16 }}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                        {
                        switchTab == 0 ? 
                        <View style={{ minWidth: "100%", minHeight: "75%", paddingTop: 40 }}>
                            <View style={styles.blankNoti}>
                                <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 14 }}>No new notification.</Text>
                            </View>
                        </View> :
                            <View style={{ minWidth: "100%", minHeight: "75%", paddingTop: 40 }}>
                                <View style={styles.blankNoti}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 14 }}>No new notification.</Text>
                                </View>
                            </View>
                        }
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
        marginTop: 25
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
        paddingHorizontal: 40
    },
    blankNoti: {
        alignItems: "center"
    }
});