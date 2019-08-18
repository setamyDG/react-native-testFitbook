import React, { Component } from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import Icona from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { DEVICE_HEIGHT } from '../../config/styles';

export default class TrainScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerBackground: (
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/train2.jpg')}
        />
      ),
      title: 'Train',
      alignSelf: 'center',
      headerTitleStyle: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      headerRight: (
        <Icona
          style={{ marginRight: 20, marginTop: -200 }}
          name="sign-out"
          size={25}
          color="white"
          onPress={() => navigation.navigate('Login')}
        />
      ),
      headerStyle: {
        height: '60%',
      },
      headerLeft: (
        <View style={{ marginLeft: 20, marginTop: -200, flexDirection: 'row' }}>
          <Icona
            style={{ top: 20 }}
            name="bars"
            size={25}
            color="white"
          />
          <Icons
            style={{ left: 100, top: 180 }}
            name="md-fitness"
            size={32}
            color="white"
          />
          <Icona
            style={{ left: 120, top: 180 }}
            name="heartbeat"
            size={32}
            color="white"
          />
          <Icons
            style={{ left: 140, top: 180 }}
            name="ios-timer"
            size={32}
            color="white"
          />
          <TouchableOpacity style={{ left: 49, top: 230,  }}>
            <Icon
              raised
              name="ios-add"
              type="ionicon"
              color="#88A096"
              size={25}
            />
          </TouchableOpacity>
        </View>
      ),
    });

    render() {
      return (
        <View style={styles.container} />
      );
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: DEVICE_HEIGHT,
    backgroundColor: '#121212',
    marginTop: '-50%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
});
