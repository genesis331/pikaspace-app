import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import tempImg from "../assets/images/hardcoded/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg";

export default function HomeCard() {
    return (
        <View style={{ minWidth: "100%", marginTop: 50, justifyContent: "center", flexDirection: "row" }}>
            <ImageBackground source={tempImg} imageStyle={{ borderRadius: 50 }} style={{ height: 300, minWidth: "80%", borderRadius: 50 }}>
                <TouchableOpacity style={{ height: "100%", width: "100%", justifyContent: "flex-end", padding: 25 }}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{ flex: 6.5 }}>
                            <Text style={{fontFamily: 'MadeTommyMedium', fontSize: 22, color: "white"}}>Hin Bus Depot</Text>
                            <Text style={{fontFamily: 'MadeTommyRegular', fontSize: 20, color: "white"}}>RM50/day</Text>
                        </View>
                        <View style={{ flex: 3.5, justifyContent: "flex-end" }}>
                            <Text style={{fontFamily: 'MadeTommyMedium', fontSize: 32, color: "white"}}>4.9/5</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

});