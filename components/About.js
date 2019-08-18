import React, { Component } from 'react';
import {
  Animated, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native-elements';
import { slideToBottom, slideUpToCenter } from '../animations/slide';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anims: {
        position: new Animated.Value(-300),
      },
    };
  }

  componentWillMount() {
    slideUpToCenter(this.state.anims, 300);
  }

  toggle = () => {
    slideToBottom(this.state.anims, 300);
    setTimeout(() => {
      this.props.toggle();
    }, 250);
  };

  render() {
    const { position } = this.state.anims;
    return (
      <View style={styles.backdrop}>
        <Animated.View style={[styles.mainContainer, { bottom: position }]}>
          <Image
            style={{
              width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'darkred', alignSelf: 'center', marginTop: '3%',
            }}
            source={require('../assets/images/logoPNG.png')}
          />
          <Text style={{
            fontSize: 17, color: 'black', fontFamily: 'OpenSans-Bold', textAlign: 'center', marginTop: '4%',
          }}
          >
              FITBOOK
          </Text>
          <Text style={{
            fontSize: 13, color: 'black', fontFamily: 'OpenSans-Italic', textAlign: 'center', marginTop: '4%',
          }}
          >
              This application is developed for gym users and everyone who wants to start with gym
          </Text>

          <Text style={{
            fontSize: 13, color: 'black', fontFamily: 'OpenSans-Italic', textAlign: 'center', marginTop: '4%',
          }}
          >
              Enjoy and believe in yourself with fitbook
          </Text>
          <Text style={{
            fontSize: 15, color: 'black', fontFamily: 'OpenSans', textAlign: 'center', marginTop: '5%',
          }}
          >
              ___________________________________________
          </Text>
          <TouchableOpacity style={{ marginTop: '3%' }}>
            <Text
              style={{
                fontSize: 13, color: 'gray', fontFamily: 'OpenSans', textAlign: 'center',
              }}
              onPress={this.toggle}
            >
                Close
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 300,
    width: 300,
    position: 'absolute',
    borderRadius: 25,
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
});
