import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import topDecoImg from "../../assets/images/Main-Page-Illus-3.png";
import tempPic from "../../assets/images/hardcoded/shuaiger.png";
let source = Image.resolveAssetSource(topDecoImg);
import HomeCard from "../../components/HomeCard";

const win = Dimensions.get('window');

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.layers}>
                <Image source={topDecoImg} style={{ width: win.width, height: source.height * win.width / source.width }} />
            </View>
            <View style={styles.layers}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.searchBar}>
                            <View style={{ flex: 0.7 }}>
                                <TouchableOpacity style={styles.searchInput}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 17, paddingLeft: 18 }}>
                                        <AntDesign name="search1" size={19} color="black" />
                                &nbsp;&nbsp;Search
                            </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.3 }}>
                                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('TestPage')}>
                                    <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 17, textAlign: "center" }}>Filter</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.welcomeMsg}>
                            <View>
                                <Text style={{ fontFamily: 'MadeTommyMedium', fontSize: 20 }}>Good Morning, Peyter!</Text>
                            </View>
                            <View>
                                <Image source={tempPic} style={{ borderRadius: 60, height: 45, width: 45 }} />
                            </View>
                        </View>
                        <HomeCard />
                        <HomeCard />
                        <View style={{ height: 120 }}></View>
                    </ScrollView>
                </SafeAreaView>
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
    searchBar: {
        paddingHorizontal: 35,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    searchInput: {
        paddingVertical: 16,
        backgroundColor: "#C4C4C4",
        borderTopLeftRadius: 21
    },
    searchButton: {
        paddingVertical: 16,
        backgroundColor: "#E8E8E8",
        borderBottomRightRadius: 21
    },
    welcomeMsg: {
        paddingHorizontal: 45,
        marginTop: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});