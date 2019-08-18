import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import CreateAccountForm from './CreateAccountForm';

export default class CreateAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation };
  }

  render() {
    return (
      <View
        style={styles.mainContainer}
      >
        <ImageBackground
          style={styles.containerBG}
          source={require('../../assets/images/bg5.jpg')}
        >
          <Text style={styles.signIn}>SIGN IN</Text>
          <CreateAccountForm />
        </ImageBackground>

        <View
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <TouchableOpacity
            style={{ top: '10%' }}
            onPress={() => this.state.navigation.navigate('Login')}
          >
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.hr}>_____________________________________</Text>
          <Text style={styles.footerText}>By sign up you indicate that you have read agreed to theTerms of Service</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
  },
  back: {
    fontSize: 15,
    color: 'gray',
    fontFamily: 'OpenSans',
    textAlign: 'center',
  },
  containerBG: {
    width: '100%',
    height: '100%',
  },
  hr: {
    fontSize: 15,
    color: 'gray',
    fontFamily: 'OpenSans',
    textAlign: 'center',
    top: '10%',
  },
  gradient: {
    height: 80,
    width: '20%',
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  footerText: {
    fontSize: 10,
    color: 'gray',
    fontFamily: 'OpenSans',
    textAlign: 'center',
    top: '15%',
  },
  signIn: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'OpenSans',
    textAlign: 'center',
    top: '10%',
  },
});
