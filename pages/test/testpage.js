import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Modal, TouchableHighlight } from 'react-native';

export default function TestPage() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    setModalVisible(true);
                }}>
                    <Text>MBS Book Success</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text>MBS Book Fail</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text>Terms of Service</Text></TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
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
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 35,
        alignItems: 'center'
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});