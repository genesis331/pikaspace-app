import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Oobe from './pages/oobe/oobe';
import * as Font from 'expo-font';

let customFonts = {
  'Gobold': require('./assets/gobold/Gobold-Regular.otf'),
  'MadeTommy': require('./assets/made_tommy/MADE-TOMMY-Medium_PERSONAL-USE.otf')
};

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
          <StatusBar style="light" />
          <Oobe />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <StatusBar style="light" />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0057AF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});