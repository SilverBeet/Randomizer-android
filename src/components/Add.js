import React, { Component } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { _storeData, _retrieveData, _clearData } from './RandomStore';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      text: '',
      food: '',
      drink: ''
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  submitForm() {
    const form = {
      food: this.state.food,
      drink: this.state.drink,
    };
    _storeData(form);
    this.setState({
      food: '',
      drink: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.body}>
            <View style={styles.closeBtnWrapper}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Image
                  style={styles.closeButton}
                  source={require('../assets/images/add.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Add Foods and Drinks</Text>
            <View style={styles.formWrapper}>
              <Text style={styles.label}>Food</Text>
              <TextInput 
                placeholder="Food..." 
                style={styles.input}
                onChangeText={(food) => this.setState({food})}
                value={this.state.food}
              />
              <Text style={styles.label}>Drink</Text>
              <TextInput
                placeholder="Drink..."
                style={styles.input}
                onChangeText={(drink) => this.setState({drink})}
                value={this.state.drink}
              />
              <View style={styles.addButtonWrapper}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={this.submitForm.bind(this)}
                >
                  <Text style={{textAlign: 'center', color: '#ffffff'}}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity 
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.buttonWrapper}
        >
          <Image
            style={styles.button}
            source={require('../assets/images/add.png')}
          />  
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: '#813434',
  },
  formWrapper: {
    margin: '10%',
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
  title: {
    textAlign: 'center',
    paddingBottom: 10,
    color: '#a5bd1e91',
    borderBottomWidth: 1, 
    borderColor: '#a5bd1e91',
  },
  buttonWrapper: {
    height: 20,
    width: 20
  },
  closeBtnWrapper: {
    margin: '2%',
    height: 20,
    width: 20,
  },
  closeButton: {
    height: 20,
    width: 20,
    tintColor: '#a5bd1e91',
    transform: [{ rotate: '45deg' }],
  },
  addButton: {
    alignContent: 'center',
    borderRadius: 10,
    borderColor: '#a5bd1e91',
    backgroundColor: '#a5bd1e91',
    width: 50,
  },
  addButtonWrapper: {
    alignItems: 'center',
    marginTop: '20%',
  },
  button: {
    tintColor: '#a5bd1e91',
    height: 20,
    width: 20,
  }
});
