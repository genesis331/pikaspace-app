import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import intropic1 from '../../assets/images/Main-Page-Illus-4.png';
import intropic2 from '../../assets/images/Main-Page-Illus-5.png';
import intropic3 from '../../assets/images/Main-Page-Illus-6.png';

const { width, height } = Dimensions.get('window');

export default function SlideIntro({ navigation }) {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };
    const { currentPage: pageIndex } = sliderState;
    return (
        <View style={styles.container}>
            <ScrollView
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setSliderPage(event);
                }}
            >
                <View style={{ width, height }}>
                    <View style={styles.layers}>
                        <Image source={intropic1} style={{ width: width, height: 953 * (width / 771) }} />
                    </View>
                    <View style={styles.layers}>
                        <View style={styles.introTextLayers}>
                            <Text style={[styles.introText, { fontSize: 34, marginBottom: 40 }]}>Welcome, Peyter!</Text>
                            <Text style={[styles.introText, { fontSize: 22 }]}>Discover the best spaces{'\n'}for you.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width, height }}>
                    <View style={styles.layers}>
                        <Image source={intropic2} style={{ width: width, height: 957 * (width / 771) }} />
                    </View>
                    <View style={styles.layers}>
                        <View style={styles.introTextLayers}>
                            <Text style={[styles.introText, { fontSize: 22 }]}>Quick & efficient booking,{'\n'}with just a single tap.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width, height }}>
                    <View style={styles.layers}>
                        <Image source={intropic3} style={{ width: width, height: 971 * (width / 771) }} />
                    </View>
                    <View style={styles.layers}>
                        <View style={styles.introTextLayers}>
                            <Text style={[styles.introText, { fontSize: 22 }]}>An entirely free platform to{'\n'}connect users & marketers.</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Home')}
                                style={{ backgroundColor: '#20517C', alignItems: "center", paddingVertical: 12.5, paddingHorizontal: 25, borderRadius: 17, marginTop: 35 }}>
                                <Text style={styles.buttonText}>Let's Pikaspace</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.paginationWrapper}>
                {Array.from(Array(3).keys()).map((key, index) => (
                    <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: "center"
    },
    layers: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 8,
        width: 8,
        borderRadius: 10 / 2,
        backgroundColor: '#6C6C6C',
        marginLeft: 6,
    },
    introTextLayers: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "35%",
        alignItems: "center",
        textAlign: "center"
    },
    introText: {
        fontFamily: "MadeTommy",
        textAlign: "center"
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: 'MadeTommy'
    }
});