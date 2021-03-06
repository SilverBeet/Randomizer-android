

import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import RandomizerButton from './RandomizerButton';
import Add from './Add';
import { _retrieveData } from './RandomStore';

export default class Randomizer extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            form: {
                food: 'No Data',
                drink: 'No Data'
            },
            randomData: [],
        }
    }
    async componentDidMount() {
        await this.updateData();
        await this.setFormOnMount();
    }

    async updateData() {
        this.setState({
            randomData: JSON.parse(await _retrieveData()),
        })
    }

    async setFormOnMount() {
        if (this.state.randomData !== null && this.state.randomData < 0) {
            const randomInt = this.randomizeNumber(this.state.randomData.length)
            if (randomInt < 0) return;
            this.setState({
                form: this.state.randomData[randomInt],
            })
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
    async randomize () {
        await this.updateData();
        if (this.state.randomData !== null) {
            const randomInt = this.randomizeNumber(this.state.randomData.length)
            if (randomInt < 0) return;
            const randomData = {
                food: this.state.randomData[randomInt].food,
                drink: this.state.randomData[randomInt].drink
            }
            this.setState({
                form: randomData
            })
        } else {
            this.setState({
                form: {
                    food: 'No Data',
                    drink: 'No Data'
                }
            })
        }
    } 
    render() {
        return (
            <View style={styles.formWrapper}>
                <View style={styles.buttonRight}>
                    <Add />
                </View>
                <Text style={styles.label} >Food</Text>
                <TextInput value={this.state.form.food} editable={false} style={styles.input} />
                <Text style={styles.label} >Drink</Text>
                <TextInput value={this.state.form.drink} editable={false} style={styles.input} />
                <RandomizerButton onPress={this.randomize.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formWrapper: {
        marginHorizontal: '10%',
    },
    buttonRight: {
        alignItems: 'flex-end',
        marginVertical: '10%'
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
