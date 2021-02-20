import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import oobe1 from "../../assets/images/Main-Page-Illus.png";

const win = Dimensions.get('window');
const ratio1 = win.width / 771;

export default function Oobe({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.layers}>
                <Image source={oobe1} style={{width: win.width, height: 861 * ratio1}}/>
            </View>
            <View style={styles.layers}>
                <View style={{ height: "49%" }}></View>
                <View style={{ height: "51%" }}>
                    <View style={{ paddingHorizontal: 70 }}>
                        <Text style={{ textTransform: "uppercase", color: "#fff", fontSize: 33, paddingHorizontal: 6, fontFamily: 'Gobold', letterSpacing: 2, paddingBottom: 26 }}>Revolutionize{"\n"}The Future{"\n"}of Space</Text>
                        <TouchableOpacity
                            style={{ backgroundColor: '#E74949', alignItems: "center", paddingVertical: 12.5, borderBottomRightRadius: 19, borderTopLeftRadius: 19, marginVertical: 11 }}>
                            <Text style={styles.buttonText}>Sign Up with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#02325B', alignItems: "center", paddingVertical: 12.5, borderBottomRightRadius: 19, borderTopLeftRadius: 19, marginVertical: 11 }}>
                            <Text style={styles.buttonText}>Sign Up with Facebook</Text>
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", textTransform: "uppercase", color: "#fff", fontSize: 11, fontFamily: 'MadeTommy', marginTop: 50 }}>
                            Already have an account? <Text style={{textDecorationLine: "underline"}} onPress={() => navigation.navigate('SignIn')}>Log In</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0057AF',
        textAlign: "left",
        flex: 1
    },
    layers: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: 'MadeTommy'
    }
});
