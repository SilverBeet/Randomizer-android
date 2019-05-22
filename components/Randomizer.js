

import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import RandomizerButton from './RandomizerButton'

export default class Randomizer extends Component {
    constructor(props) {

        super(props)
        
        this.state = { 

            form: {
                food: 'Pizza',
                drink: 'Coca Cola'
            },
                                       
            randomData: [{
                    food: 'Pizza',
                    drink: 'Monster'
                },
                {
                    food: 'Hamburger',
                    drink: 'Øl'
                },
                {
                    food: 'Lasagne',
                    drink: 'Coca Cola'
                },
                {
                    food: 'Pasta Bolognese',
                    drink: 'Fanta'
                },
                {
                    food: 'Toast',
                    drink: 'Tonic'
                },
                {
                    food: 'Carbonara',
                    drink: 'Rød vin'
                },
                {
                    food: 'Pizza',
                    drink: 'Øl'
                }
            ]
        }
        
        
    }
    
    randomizeNumber = (maxNum) => {
        let index = Math.floor(Math.random() * maxNum);
        if (this.current !== this.next) {
            if (isNaN(this.current)) this.current = 0;
            else this.current = this.next;
        } else if (this.current === this.next) {
            if (isNaN(this.current)) this.current = 0;
            else this.current = (this.next === maxNum - 1 ? this.next - 1 : this.next + 1);
        }
        
        this.next = index;
        return this.current;
    } 

    Randomize = () => {
        let i = this.randomizeNumber(this.state.randomData.length)
        newData = {
            food: this.state.randomData[i].food,
            drink: this.state.randomData[i].drink
        }
        this.setState({
            form:newData
        })
    } 

    render() {
        return (
            <View style={styles.formWrapper}>
                <Text style={styles.label} >Food</Text>
                <TextInput value={this.state.form.food} editable={false} style={styles.input} />
                <Text style={styles.label} >Drink</Text>
                <TextInput value={this.state.form.drink} editable={false} style={styles.input} />
                <RandomizerButton onPress={this.Randomize} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formWrapper: {
        flex: 1,
        marginTop: 30,
        margin: '20%'
    },
    input: {
        backgroundColor: 'transparent',
        marginBottom: 10,
        borderBottomWidth: 1, 
        borderColor: '#a5bd1e91',
        color: '#ffffff'
    },
    label: {
        color: '#a5bd1e91',
        textAlign: 'left',
    },
});
