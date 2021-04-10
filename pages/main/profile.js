import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, Dimensions, Animated, LayoutAnimation } from 'react-native';
import topDecoImg from "../../assets/images/Main-Page-Illus-2.png";
let source = Image.resolveAssetSource(topDecoImg);
import tempPic from "../../assets/images/hardcoded/shuaiger.png";

const win = Dimensions.get('window');

export default function Profile() {
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.layers, { opacity: 1 }]}>
                <Image source={topDecoImg} style={{ width: win.width, height: source.height * win.width / source.width }} />
            </Animated.View>
            <View style={styles.layers}>
                <SafeAreaView>
                    <ScrollView>
                        <Animated.View style={[styles.profileTop, { justifyContent: "space-around" }]}>
                            <View>
                                <Animated.View style={[styles.profPicFrame, { height: 115, width: 115, marginRight: 10 }]}>
                                    <Image source={tempPic} style={{ borderRadius: 60, height: "100%", width: "100%" }} />
                                </Animated.View>
                            </View>
                            <Animated.View>
                                <Text style={{ fontFamily: "MadeTommyMedium", fontSize: 24 }}>Hello, Peyter</Text>
                            </Animated.View>
                        </Animated.View>
                        <View style={styles.infoButton}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#FF4699', alignItems: "center", paddingVertical: 10, borderRadius: 100 / 2 }}>
                                <Text style={styles.buttonText}>Make Money with Pikaspace</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountSettings}>
                            <View>
                                <Text style={styles.groupName}>Account Settings</Text>
                            </View>
                            <View>
                                <TouchableOpacity><Text style={styles.groupOption}>Personal information</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Payments</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Notifications & Alerts</Text></TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.groupName}>Booking</Text>
                            </View>
                            <View>
                                <TouchableOpacity><Text style={styles.groupOption}>Manage booking</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Booking history</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Saved</Text></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity><Text style={styles.inviteOption}>Invite Friends</Text></TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.groupName}>Support</Text>
                            </View>
                            <View>
                                <TouchableOpacity><Text style={styles.groupOption}>How Pikaspace Works</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Contact us</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Help centre</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Give us a feedback</Text></TouchableOpacity>
                            </View>
                            <View>
                                <View style={{ height: 35 }}></View>
                                <TouchableOpacity><Text style={styles.groupOption}>Terms of service</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.groupOption}>Privacy</Text></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity><Text style={styles.logOutOption}>Log Out</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 80 }}></View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: "center"
    },
    layers: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        flex: 1
    },
    profileTop: {
        paddingHorizontal: 30,
        marginTop: 55,
        flexDirection: "row",
        alignItems: "center"
    },
    infoButton: {
        paddingHorizontal: 30,
        marginTop: 45,
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: 'MadeTommyBold'
    },
    accountSettings: {
        paddingHorizontal: 30,
        marginTop: 15
    },
    groupName: {
        fontSize: 14,
        color: "#858585",
        paddingVertical: 25,
        fontFamily: 'MadeTommyMedium'
    },
    groupOption: {
        fontSize: 18,
        color: "#000000",
        paddingVertical: 10,
        fontFamily: 'MadeTommyRegular'
    },
    inviteOption: {
        paddingTop: 35,
        paddingBottom: 25,
        fontSize: 18,
        color: "#000000",
        fontFamily: 'MadeTommyMedium'
    },
    logOutOption: {
        fontSize: 18,
        color: "#000000",
        paddingVertical: 35,
        fontFamily: 'MadeTommyRegular',
        color: "#E31B1B"
    }
});