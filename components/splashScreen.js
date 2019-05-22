import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar} from 'react-native';

export default class splashScreen extends Component {
    render() {
        return (
            <View style={styles.viewStyles}>
                <StatusBar 
                    backgroundColor="#813434"
                />
                <Text style={styles.textStyles}>
                    Loading...
                </Text>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#813434',
        height: '100%',
        width: '100%'
    },
    textStyles: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold' 
    }
});
