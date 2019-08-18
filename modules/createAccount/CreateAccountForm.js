import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View, Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FadeAnimation from '../../animations/view/FadeAnimation';
import AccountCreated from '../../components/AccountCreated';

export default class CreateAccountForm extends Component {
    state = {
      username: '',
      password: '',
      confirmPassword: '',
      isAccountCreatedModalVisible: false,
    };

  toggleAboutModal = () => {
    this.setState({
      isAccountCreatedModalVisible: !this.state.isAccountCreatedModalVisible,
    });
  };

  render() {
    const { isAccountCreatedModalVisible } = this.state;
    return (
      <View>
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
          <TextInput
            style={styles.confirmPasswordInput}
            placeholder="confirm password"
            placeholderTextColor="gray"
            secureTextEntry
            returnKeyType="go"
            ref={(ref) => {
              this.passwordRef = ref;
            }}
            onChangeText={value => this.setState({ confirmPassword: value })}
            value={this.state.confirmPassword}
          />
          <TouchableOpacity style={[styles.gradient, { top: 120 }]} onPress={this.toggleAboutModal}>
            <LinearGradient
              colors={['transparent', 'transparent']}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
            >
              <Text style={{
                fontSize: 20, color: 'white', fontFamily: 'OpenSans', textAlign: 'center',
              }}
              >
                    CREATE ACCOUNT !
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Modal visible={isAccountCreatedModalVisible} transparent animationType="fade">
              <AccountCreated toggle={this.toggleAboutModal} />
            </Modal>
          </View>
        </FadeAnimation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    top: 15
  },
  gradient: {
    height: 50,
    width: '60%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  loginInput: {
    backgroundColor: 'white',
    width: '70%',
    height: '9%',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 80,
    color: 'gray',
    top: 10,
  },
  passwordInput: {
    backgroundColor: 'white',
    width: '70%',
    height: '9%',
    borderRadius: 10,
    textAlign: 'center',
    color: 'gray',
    top: 20,
  },
  confirmPasswordInput: {
    backgroundColor: 'white',
    width: '70%',
    height: '9%',
    borderRadius: 10,
    textAlign: 'center',
    color: 'gray',
    top: 50,
  },
});
