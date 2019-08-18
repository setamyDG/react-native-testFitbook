import React, { Component } from 'react';
import {
  Animated, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { slideToBottom, slideUpToCenter } from '../animations/slide';

export default class AccountCreated extends Component {
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
            <Icons style={{ alignSelf: 'center', marginTop: '3%' }} name="check" size={85} color="green" />
            <Text style={{
              fontSize: 15, color: 'black', fontFamily: 'OpenSans-Bold', textAlign: 'center', marginTop: '5%',
            }}
            >
              Your account has been created succesfully
            </Text>
            <Text style={{
              fontSize: 12, color: 'black', fontFamily: 'OpenSans-Italic', textAlign: 'center', marginTop: '18%',
            }}
            >
              Now you can log in by using your username and password
            </Text>
            <Text style={{
              fontSize: 15, color: 'black', fontFamily: 'OpenSans', textAlign: 'center', marginTop: '0%',
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
