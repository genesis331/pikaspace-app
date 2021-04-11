import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tempImg from "../../assets/images/hardcoded/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg";

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
                                        <TouchableOpacity style={{marginLeft: 16}}>
                                            <AntDesign name="hearto" size={24} color="white" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{marginLeft: 16}}>
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
                    <View style={{paddingVertical: 30, paddingHorizontal: 50}}>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <View style={{flex: 0.5}}>
                                <Text><AntDesign name="laptop" size={24} color="black" />Home Office</Text>
                                <Text><AntDesign name="user" size={24} color="black" />2 Person</Text>
                                <Text><AntDesign name="wifi" size={24} color="black" />Wi-Fi</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text><AntDesign name="find" size={24} color="black" />Safety</Text>
                                <Text><AntDesign name="rest" size={24} color="black" />AC</Text>
                                <Text><AntDesign name="key" size={24} color="black" />Parking</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
    }
});