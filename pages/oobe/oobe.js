import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Oobe() {
    return (
      <View style={styles.container}>
            <View style={{height: "40%"}}></View>
            <View style={{height: "60%"}}>
                <View style={{paddingHorizontal: 70}}>
                    <Text style={{textTransform: "uppercase", color: "#fff", fontSize: 33, paddingHorizontal: 6, fontFamily: 'Gobold', letterSpacing: 2, paddingBottom: 26}}>Revolutionize{"\n"}The Future{"\n"}of Space</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: '#E74949', alignItems: "center", paddingVertical: 12.5, borderBottomRightRadius: 19, borderTopLeftRadius: 19, marginVertical: 11}}>
                        <Text style={styles.buttonText}>Sign Up with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#02325B', alignItems: "center", paddingVertical: 12.5, borderBottomRightRadius: 19, borderTopLeftRadius: 19, marginVertical: 11}}>
                        <Text style={styles.buttonText}>Sign Up with Facebook</Text>
                    </TouchableOpacity>
                    <Text style={{alignSelf: "center", textTransform: "uppercase", color: "#fff", fontSize: 11, fontFamily: 'MadeTommy', marginTop: 50}}>Already have an account? Log In</Text>
                </View>
            </View>
      </View>
    );
 }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0057AF',
        textAlign: "left",
        width: "100%"
    },
    buttonText: {
        fontSize: 13, 
        color: '#fff', 
        textTransform: "uppercase",
        fontFamily: 'MadeTommy'
    }
});
  