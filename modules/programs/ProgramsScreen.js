import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
export default class ProgramsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0),
      springValue: new Animated.Value(0.3),
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    alignSelf: 'center',
    headerTitleStyle: {
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
      marginRight: -45,
    },
    headerRight: (
      <Icon
        style={{ marginRight: 20 }}
        name="sign-out"
        size={25}
        color="black"
        onPress={() => navigation.navigate('Login')}
      />
    ),
  });

  fadeAnimation = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1200,
    }).start();
  };

  moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 100,
      duration: 500,
      //  easing: Easing.back(),
      //  easing: Easing.cubic(),

      easing: Easing.linear(),
    }).start();
  };

  springAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          onLoad={this.fadeAnimation}
          source={require('../../assets/images/95mine.jpg')}
          style={[styles.imageView, { opacity: this.state.fadeValue }]}
          // { left: this.state.xValue }]}
          //  { transform: [{ scale: this.state.springValue }], alignSelf: 'center' }]}
        />
        <TouchableOpacity style={styles.button} onPress={this.fadeAnimation}>
          <Text style={styles.buttonText}>animate</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
/*
      {' '}
      <Animated.View style={[styles.animationView,
        // { opacity: this.state.fadeValue }
        { left: this.state.xValue },
      ]}
      >
      </Animated.View>
      */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '700',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '50%',
  },
  animationView: {
    width: 100,
    height: 100,
    backgroundColor: '#6d5',
  },
  button: {
    backgroundColor: '#3aa',
    height: 45,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    padding: 20,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageView: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
});
