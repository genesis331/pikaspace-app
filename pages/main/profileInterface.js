import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tempImg from "../../assets/images/hardcoded/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg";
import tempPic from "../../assets/images/hardcoded/shuaiger.png";

export default function ProfileInterface() {
    return (
        <View style={styles.container}>
            <View style={styles.layers}>
                <ScrollView>
                    <View style={{ height: 340 }}>
                        <ImageBackground source={tempImg} imageStyle={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} style={{ height: "100%", minWidth: "80%", borderRadius: 50 }}>
                            <SafeAreaView>
                                <View style={{ height: "100%", width: "100%", justifyContent: "space-between", paddingHorizontal: 28, paddingBottom: 28 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                        <TouchableOpacity style={{ marginLeft: 16 }}>
                                            <AntDesign name="hearto" size={24} color="white" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginLeft: 16 }}>
                                            <AntDesign name="notification" size={24} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flex: 6.5 }}>
                                            <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 30, color: "white" }}>Hin Bus Depot</Text>
                                            <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 16, color: "white", paddingVertical: 6 }}>by Crystal Khoo</Text>
                                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 28, color: "white" }}>RM50</Text>
                                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 20, color: "white" }}>/day</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 3.5, justifyContent: "flex-end" }}>
                                            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "baseline" }}>
                                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 40, color: "white" }}>4.9</Text>
                                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 30, color: "white" }}>/5</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </ImageBackground>
                    </View>
                    <View style={{ paddingVertical: 30, paddingHorizontal: 50 }}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <View style={{ flex: 0.4 }}>
                                <View style={styles.featureRow}>
                                    <View><AntDesign name="laptop" size={24} color="black" /></View>
                                    <View style={styles.featureTextView}><Text style={styles.featureText}>Home Office</Text></View>
                                </View>
                                <View style={styles.featureRow}>
                                    <View><AntDesign name="user" size={24} color="black" /></View>
                                    <View style={styles.featureTextView}><Text style={styles.featureText}>2 Person</Text></View>
                                </View>
                                <View style={styles.featureRow}>
                                    <View><AntDesign name="wifi" size={24} color="black" /></View>
                                    <View style={styles.featureTextView}><Text style={styles.featureText}>Wi-Fi</Text></View>
                                </View>
                            </View>
                            <View style={{ flex: 0.2 }}></View>
                            <View style={{ flex: 0.4 }}>
                                <View style={styles.featureRow}>
                                    <View><AntDesign name="find" size={24} color="black" /></View>
                                    <View style={styles.featureTextView}><Text style={styles.featureText}>Safety</Text></View>
                                </View>
                                <View style={styles.featureRow}>
                                    <View><AntDesign name="rest" size={24} color="black" /></View>
                                    <View style={styles.featureTextView}><Text style={styles.featureText}>AC</Text></View>
                                </View>
                                <View style={styles.featureRow}>
                                    <View><AntDesign name="key" size={24} color="black" /></View>
                                    <View style={styles.featureTextView}><Text style={styles.featureText}>Parking</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 18 }}>
                            Details
                        </Text>
                        <AntDesign name="down" size={17} color="black" style={{ marginLeft: 8 }} />
                    </View>
                    <View style={{ paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 18 }}>
                            See more
                        </Text>
                        <AntDesign name="down" size={17} color="black" style={{ marginLeft: 8 }} />
                    </View>
                    <View style={{ paddingVertical: 20, flexDirection: "row", paddingHorizontal: 35 }}>
                        <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>
                            Explore nearby spaces
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 20, flexDirection: "row", paddingHorizontal: 35, justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>
                            352 Reviews
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                            <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>4.9</Text>
                            <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 14 }}>/5</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 20, flexDirection: "row", paddingHorizontal: 35, justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <View style={{ marginVertical: 4 }}><Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 32 }}>Owner</Text></View>
                            <View style={{ marginVertical: 4 }}><Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 26 }}>Crystal Khoo</Text></View>
                        </View>
                        <View>
                            <View>
                                <Image source={tempPic} style={{ borderRadius: 60, height: 80, width: 80 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal: 35, paddingVertical: 20 }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            paddingVertical: 14,
                            elevation: 2,
                            backgroundColor: '#ffffff',
                            borderColor: '#20517C',
                            borderWidth: 2,
                            flex: 1
                        }}>
                            <Text style={{
                                color: '#20517C',
                                textAlign: 'center',
                                fontSize: 12,
                                fontFamily: 'MadeTommyBold'
                            }}>CONTACT OWNER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 18 }}>
                            More info about the owner
                        </Text>
                        <AntDesign name="down" size={17} color="black" style={{ marginLeft: 8 }} />
                    </View>
                    <View style={{ paddingTop: 60, flexDirection: "row", paddingHorizontal: 35 }}>
                        <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>
                            Related spaces
                        </Text>
                    </View>
                    <View style={{ height: 160 }}></View>
                </ScrollView>
                <View style={{ height: 120, alignItems: "center", position: "absolute", bottom: 0, width: "100%" }}>
                    <TouchableOpacity style={{
                        borderRadius: 20,
                        paddingVertical: 16,
                        paddingHorizontal: 40,
                        elevation: 2,
                        backgroundColor: '#20517C'
                    }}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 14,
                            fontFamily: 'MadeTommyBold'
                        }}>BOOK</Text>
                    </TouchableOpacity>
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
    featureRow: {
        flexDirection: "row",
        paddingVertical: 8,
        alignItems: "center"
    },
    featureTextView: {
        paddingLeft: 12
    },
    featureText: {
        fontFamily: 'MadeTommyRegular'
    }
});