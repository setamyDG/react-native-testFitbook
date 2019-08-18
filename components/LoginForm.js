import React, { Component } from 'react';
import {
  Alert, StyleSheet, Text, TextInput, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import FadeAnimation from '../animations/view/FadeAnimation';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation };
  }

    state = {
      username: '',
      password: '',
    };

    ChceckLoginForm() {
      if (
        this.state.username.localeCompare('1') != 0
            && this.state.password.localeCompare('1') != 0
      ) {
        Alert.alert('error', 'error2');
      } else {
        this.state.navigation.navigate('Main');
      }
    }

    render() {
      return (
        <FadeAnimation style={styles.container}>
          <TextInput
            style={styles.loginInput}
            placeholder="@username"
            returnKeyType="next"
            placeholderTextColor="gray"
            onSubmitEditing={() => this.passwordRef.focus()}
            onChangeText={value => this.setState({ username: value })}
            value={this.state.username}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry
            returnKeyType="go"
            ref={(ref) => {
              this.passwordRef = ref;
            }}
            onChangeText={value => this.setState({ password: value })}
            value={this.state.password}
          />
          <TouchableOpacity
            style={[styles.gradient, { top: 80 }]}
            onPress={() => this.ChceckLoginForm()}
          >
            <LinearGradient
              colors={['transparent', 'transparent']}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
            >
              <Text style={{
                fontSize: 20, color: 'white', fontFamily: 'OpenSans', textAlign: 'center',
              }}
              >
                    GO !
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </FadeAnimation>
      );
    }
}
export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  gradient: {
    height: 50,
    width: '40%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  loginInput: {
    backgroundColor: 'white',
    width: '70%',
    height: '13%',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
    color: 'gray',
    top: 40,
  },
  passwordInput: {
    backgroundColor: 'white',
    width: '70%',
    height: '13%',
    borderRadius: 10,
    textAlign: 'center',
    color: 'gray',
    top: 40,

  },
});
