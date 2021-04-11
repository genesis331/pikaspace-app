import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import tempImg from "../assets/images/hardcoded/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg";

export default function HomeCard({ navigation }) {
    return (
        <View style={{ minWidth: "100%", marginTop: 50, justifyContent: "center", flexDirection: "row" }}>
            <ImageBackground source={tempImg} imageStyle={{ borderRadius: 50 }} style={{ height: 300, minWidth: "80%", borderRadius: 50 }}>
                <TouchableOpacity style={{ height: "100%", width: "100%", justifyContent: "flex-end", padding: 25 }} onPress={() => navigation.navigate('ProfileInterface')}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 6.5 }}>
                            <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 23, color: "white" }}>Hin Bus Depot</Text>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 22, color: "white" }}>RM50</Text>
                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 14, color: "white" }}>/day</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3.5, justifyContent: "flex-end" }}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "baseline" }}>
                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 40, color: "white" }}>4.9</Text>
                                <Text style={{ fontFamily: 'MadeTommyRegular', fontSize: 20, color: "white" }}>/5</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

});