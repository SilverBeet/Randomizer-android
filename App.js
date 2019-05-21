import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Randomizer from './components/Randomizer';



export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Randomizer />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: "#813434",
    borderColor: '#a5bd1e91',
    borderWidth: 1,
  }
});
