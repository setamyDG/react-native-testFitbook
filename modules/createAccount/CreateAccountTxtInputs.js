import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class CreateAccountTxtInputs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.firstTxtInput}
          placeholder="USERNAME"
          returnKeyType="next"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.txtInput}
          placeholder="PASSWORD"
          returnKeyType="next"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.txtInput}
          placeholder="CONFIRM PASSWORD"
          returnKeyType="next"
          placeholderTextColor="black"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  firstTxtInput: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '80%',
    height: '18%',
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 80,
    color: 'white',
  },
  txtInput: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '80%',
    height: '18%',
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
});
