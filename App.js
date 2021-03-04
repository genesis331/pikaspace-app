import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Oobe from './pages/oobe/oobe';
import SignIn from './pages/oobe/signin';
import SlideIntro from './pages/oobe/slideintro';
import Main from './pages/main/main';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

let customFonts = {
  'Gobold': require('./assets/gobold/Gobold-Regular.otf'),
  'MadeTommyRegular': require('./assets/made_tommy/MADE-TOMMY-Regular_PERSONAL-USE.otf'),
  'MadeTommyMedium': require('./assets/made_tommy/MADE-TOMMY-Medium_PERSONAL-USE.otf'),
  'MadeTommyBold': require('./assets/made_tommy/MADE-TOMMY-Bold_PERSONAL-USE.otf')
};

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Oobe" component={Oobe} options={{headerShown: false}}/>
              <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name="SlideIntro" component={SlideIntro} options={{headerShown: false}}/>
              <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <StatusBar style="dark" />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0057AF',
  },
});