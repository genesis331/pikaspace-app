import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import signinbg from '../../assets/images/Main-Page-Illus-LogIn-Page.png';
import logo from '../../assets/images/FAVICON.png';
let source = Image.resolveAssetSource(signinbg);

const win = Dimensions.get('window');

export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#B8D5ED', '#1BB5B5']} style={styles.layers} />
            <View style={[styles.layers, { resizeMode: 'cover', justifyContent: 'center' }]}>
                <Image source={signinbg} style={{ width: win.width, height: source.height * win.width / source.width }} />
            </View>
            <View style={[styles.layers, { justifyContent: "center", alignItems: "center" }]}>
                <Image source={logo} style={{ height: 60, width: 60 }} />
                <View style={{ paddingHorizontal: 70, width: "100%", marginTop: 140 }}>
                    <TouchableOpacity
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'SlideIntro'
                                },
                            ],
                        })}
                        style={{ backgroundColor: '#E74949', alignItems: "center", paddingVertical: 12.5, borderBottomRightRadius: 19, borderTopLeftRadius: 19, marginVertical: 11 }}>
                        <Text style={styles.buttonText}>Sign In with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'SlideIntro'
                                },
                            ],
                        })}
                        style={{ backgroundColor: '#02325B', alignItems: "center", paddingVertical: 12.5, borderBottomRightRadius: 19, borderTopLeftRadius: 19, marginVertical: 11 }}>
                        <Text style={styles.buttonText}>Sign In with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    layers: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        top: 0
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: 'MadeTommyMedium'
    }
});