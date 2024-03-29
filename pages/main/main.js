import React, { useState, useRef } from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import Home from './home';
import Discover from './discover';
import Inbox from './inbox';
import Profile from './profile';

const { width, height } = Dimensions.get('window');

export default function Main({ navigation }) {
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
    const scrollViewRef = useRef();

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
                ref={scrollViewRef}
            >
                <View style={{ width, height }}>
                    <Home navigation={navigation} />
                </View>
                <View style={{ width, height }}>
                    <Discover navigation={navigation}/>
                </View>
                <View style={{ width, height }}>
                    <Inbox navigation={navigation}/>
                </View>
                <View style={{ width, height }}>
                    <Profile navigation={navigation}/>
                </View>
            </ScrollView>
            <BlurView intensity={120} tint={"light"} style={styles.paginationWrapper}>
                <AntDesign name="home" size={24} color={pageIndex === 0 ? "black" : "grey"} style={styles.tabIcon} onPress={() => { scrollViewRef.current?.scrollTo({ x: 0 }) }} />
                <AntDesign name="search1" size={24} color={pageIndex === 1 ? "black" : "grey"} style={styles.tabIcon} onPress={() => { scrollViewRef.current?.scrollTo({ x: 1 / 4 * 4 * width }) }} />
                <AntDesign name="mail" size={24} color={pageIndex === 2 ? "black" : "grey"} style={styles.tabIcon} onPress={() => { scrollViewRef.current?.scrollTo({ x: 2 / 4 * 4 * width }) }} />
                <AntDesign name="user" size={24} color={pageIndex === 3 ? "black" : "grey"} style={styles.tabIcon} onPress={() => { scrollViewRef.current?.scrollTo({ x: 3 / 4 * 4 * width }) }} />
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: "center"
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 14,
        paddingTop: 25,
        paddingBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    tabIcon: {
        flex: 1,
        textAlign: "center"
    }
});