import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Modal, TouchableHighlight } from 'react-native';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';

export default function TestPage() {
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    setModalVisible1(true);
                }}>
                    <Text>MBS Book Success</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    setModalVisible2(true);
                }}>
                    <Text>MBS Book Fail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    setModalVisible3(true);
                }}>
                    <Text>Terms of Service</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    setModalVisible4(true);
                }}>
                    <Text>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    setModalVisible5(true);
                }}>
                    <Text>Confirmation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text>Owner Profile Contact</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                >
                    <View style={styles.centeredView}>
                        <LinearGradient colors={["#73DFFF", "#16BE8C"]} style={styles.modalView}>
                            <View style={{ marginHorizontal: 30 }}>
                                <FontAwesome5 name="check-circle" size={100} color="white" style={{ textAlign: 'center' }} />
                                <Text style={[styles.modalText, { fontSize: 20, paddingTop: 20 }]}>Booked!</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: "white",
                                    fontFamily: 'MadeTommyRegular'
                                }}>
                                    View your booking in
                                </Text>
                                <Text style={styles.modalText}>Profile &gt; Manage Booking</Text>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, marginTop: 70 }}
                                    onPress={() => {
                                        setModalVisible1(!modalVisible1);
                                    }}>
                                    <Text style={[styles.textStyle, { color: "#2CC6A6" }]}>GO TO MANAGE BOOKING</Text>
                                </TouchableHighlight>
                            </View>
                        </LinearGradient>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                >
                    <View style={styles.centeredView}>
                        <LinearGradient colors={["#FF8E8E", "#DF0F0F"]} style={styles.modalView}>
                            <View style={{ marginHorizontal: 30 }}>
                                <AntDesign name="closecircleo" size={100} color="white" style={{ textAlign: 'center' }} />
                                <Text style={[styles.modalText, { fontSize: 20, paddingTop: 20 }]}>Oh-oh!</Text>
                                <Text style={styles.modalText}>It seems there's an issue with your payment.</Text>
                                <View>
                                    <TouchableHighlight style={{ ...styles.openButton, marginTop: 70 }}>
                                        <Text style={[styles.textStyle, { color: "#A23939" }]}>TRY AGAIN</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, marginTop: 14 }}
                                        onPress={() => {
                                            setModalVisible2(!modalVisible2);
                                        }}>
                                        <Text style={[styles.textStyle, { color: "#A23939" }]}>CANCEL</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible3}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView2}>
                            <View style={{ flex: 0.08, borderBottomWidth: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>Terms of Service</Text>
                                    <Ionicons name="close" size={24} color="black" />
                                </View>
                            </View>
                            <View style={{ flex: 0.7 }}>

                            </View>
                            <View style={{ flex: 0.22 }}>
                                <View style={{ alignSelf: "center" }}>
                                    <TouchableHighlight style={{ ...styles.openButton2, backgroundColor: '#20517C' }} onPress={() => {
                                        setModalVisible3(!modalVisible3);
                                    }}>
                                        <Text style={styles.textStyle}>AGREE & CONTINUE</Text>
                                    </TouchableHighlight>
                                </View>
                                <Text style={{ textAlign: "center", marginTop: 14, fontFamily: 'MadeTommyRegular', paddingHorizontal: 35 }}>
                                    By clicking "Agree & Continue", you agreed with the terms of service of Pikaspace and the owner.
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible4}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView2}>
                            <View style={{ flex: 0.08, borderBottomWidth: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>Schedule</Text>
                                    <Ionicons name="close" size={24} color="black" />
                                </View>
                            </View>
                            <View style={{ flex: 0.77 }}>

                            </View>
                            <View style={{ flex: 0.15 }}>
                                <View style={{ alignSelf: "center" }}>
                                    <TouchableHighlight style={{ ...styles.openButton2, backgroundColor: '#20517C' }} onPress={() => {
                                        setModalVisible4(!modalVisible4);
                                    }}>
                                        <Text style={styles.textStyle}>NEXT</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible5}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView2}>
                            <View style={{ flex: 0.08, borderBottomWidth: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 22 }}>Confirmation</Text>
                                    <Ionicons name="close" size={24} color="black" />
                                </View>
                            </View>
                            <View style={{ flex: 0.77 }}>

                            </View>
                            <View style={{ flex: 0.15 }}>
                                <View style={{ alignSelf: "center" }}>
                                    <TouchableHighlight style={{ ...styles.openButton2, backgroundColor: '#20517C' }} onPress={() => {
                                        setModalVisible5(!modalVisible5);
                                    }}>
                                        <Text style={styles.textStyle}>PIK THE SPACE</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    buttons: {
        backgroundColor: "#73DFFF",
        padding: 15,
        marginVertical: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        flex: 0.8,
        justifyContent: "space-around",
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 35,
        alignItems: 'center'
    },
    modalView2: {
        flex: 0.8,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical: 35,
        alignItems: 'center'
    },
    openButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 40,
        elevation: 2
    },
    openButton2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 40,
        elevation: 2
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: "white",
        fontFamily: 'MadeTommyMedium'
    },
});