

import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View} from 'react-native';

export default class RandomizerButton extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onPress}
                >
                    <Image
                        style={styles.button}
                        source={require('../src/assets/images/dice.png')}
                    />
                </TouchableOpacity >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: '60%',
    },
    button: {
        height: 70,
        width: 70
    }
    
});
