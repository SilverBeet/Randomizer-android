

import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import RandomizerButton from './RandomizerButton'

export default class Randomizer extends Component {
    constructor(props) {

        super(props)
        
        this.state = { 
            randomNum: {
                current: 0,
                next: 0
            },

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
    
    Randomize = () => {
        let index = Math.floor(Math.random() * this.state.randomData.length);
        
    
        if (this.state.randomNum.current !== this.state.randomNum.next) {

            this.state.randomNum.current = this.state.randomNum.next
            console.log(`Current: ${this.state.randomNum.current}`)

            this.state.form = {
                food: this.state.randomData[this.state.randomNum.current].food,
                drink: this.state.randomData[this.state.randomNum.current].drink  
            } 
            
            this.setState({
                form:this.state.form
            })

        } else if (this.state.randomNum.current === this.state.randomNum.next) {

            this.state.randomNum.current = (this.state.randomNum.next === this.state.randomData.length - 1 ? this.state.randomNum.next - 1 : this.state.randomNum.next + 1)
            console.log(`Current: ${this.state.randomNum.current}`)

            this.state.form = {
                food: this.state.randomData[this.state.randomNum.current].food,
                drink: this.state.randomData[this.state.randomNum.current].drink  
            } 
            
            this.setState({
                form:this.state.form
            })
        }

        this.state.randomNum.next = index
        console.log(`Next:    ${this.state.randomNum.next}`)

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
