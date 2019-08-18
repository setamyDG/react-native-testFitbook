import React, { Component } from 'react';
import {
  Animated,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { Icon, SocialIcon, Text } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import { hideExtendedLogin, showExtendedLogin } from '../../animations/login';
import About from '../../components/About';
import LoginForm from '../../components/LoginForm';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anims: {
        extendedLoginPosition: new Animated.Value(0),
      },
      isAboutModalVisible: false,
      isExtendedLoginVisible: true,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  toggleAboutModal = () => {
    this.setState({
      isAboutModalVisible: !this.state.isAboutModalVisible,
    });
  };

  _renderUpperView = () => (
    <View style={styles.upperView}>
      <ImageBackground
        style={styles.upperImage}
        source={require('../../assets/images/bg3.jpg')}
      >
        <Text style={styles.login}>LOGIN</Text>
        <LoginForm />
      </ImageBackground>
    </View>
  );

  _renderMainIcon = () => (
    <TouchableOpacity style={styles.icon} onPress={this.IconPressHandler}>
      <Icon
        raised
        name={this.state.isExtendedLoginVisible ? 'angle-down' : 'angle-up'}
        size={30}
        type="font-awesome"
        color="#f50"
      />
    </TouchableOpacity>
  );

  _renderBottomView = () => (
    <View style={styles.bottomView}>
      <Text>asd</Text>
    </View>
  );

  IconPressHandler = () => {
    const { isExtendedLoginVisible } = this.state;
    if (isExtendedLoginVisible) {
      hideExtendedLogin(this.state.anims);
    } else {
      showExtendedLogin(this.state.anims);
    }

    setTimeout(() => {
      this.setState({
        isExtendedLoginVisible: !isExtendedLoginVisible,
      });
    }, 300);
  };

  _renderExtendedLogin = () => (
    <Animated.View
      style={[styles.extendedLoginView, { bottom: this.state.anims.extendedLoginPosition }]}
    >
      <SocialIcon
        style={{ width: 300, borderRadius: 10, marginTop: 75 }}
        title="Sign In With Facebook"
        button
        type="facebook"
      />
      <SocialIcon
        style={{ width: 300, borderRadius: 10, marginTop: 20 }}
        title="Sign In With Google"
        button
        type="google-plus-official"
      />

      <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAccount')}>
        <Text style={styles.createAcc}>Create an Account</Text>
      </TouchableOpacity>

      <Text style={styles.hr}>_____________________________________</Text>

      <TouchableOpacity style={styles.footer} onPress={this.toggleAboutModal}>
        <Text style={styles.footerText}>ABOUT | CONTACT</Text>
      </TouchableOpacity>

      {this._renderMainIcon()}

    </Animated.View>
  );

  render() {
    const { isAboutModalVisible } = this.state;
    return (
      <View style={styles.mainContainer}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <Modal visible={isAboutModalVisible} transparent animationType="fade">
          <About toggle={this.toggleAboutModal} />
        </Modal>
        {this._renderUpperView()}

        {this._renderBottomView()}

        {this._renderExtendedLogin()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  upperView: {
    alignItems: 'center',
    height: '50%',
    width: '100%',
  },
  bottomView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  extendedLoginView: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  upperImage: {
    flex: 1,
    width: '100%',
  },
  createAcc: {
    marginTop: 40,
    fontSize: 15,
    color: 'gray',
    fontFamily: 'OpenSans',
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
    height: 80,
    width: 80,
    position: 'absolute',
  },
  login: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'OpenSans',
    textAlign: 'center',
    top: '15%',
  },
  hr: {
    fontSize: 15,
    color: 'gray',
    fontFamily: 'OpenSans',
    textAlign: 'center',
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
  footer: {
    marginTop: 10,
  },
  footerText: {
    fontSize: 10,
    color: 'gray',
    fontFamily: 'OpenSans',
    textAlign: 'center',
  },
});
