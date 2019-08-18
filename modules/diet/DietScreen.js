import React, { Component } from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View, ScrollView,
} from 'react-native';
import Icona from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconic from 'react-native-vector-icons/Entypo';
import { Icon } from 'react-native-elements';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../config/styles';
import DietSwiper from './DietSwiper';

export default class DietScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerBackground: (
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/diet2.jpg')}
        />
      ),
      title: 'Diet',
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
            style={{ left: 100, top: 175 }}
            name="silverware-fork-knife"
            size={35}
            color="white"
          />
          <Iconic
            style={{ left: 117, top: 175 }}
            name="bowl"
            size={35}
            color="white"
          />
          <Icona
            style={{ left: 137, top: 175 }}
            name="spoon"
            size={35}
            color="white"
          />
          <TouchableOpacity style={{ left: 47, top: 230 }}>
            <Icon
              raised
              name="ios-add"
              type="ionicon"
              color="#f50"
              size={25}
            />
          </TouchableOpacity>
        </View>
      ),
    });

    render() {
      return (
        <ScrollView style={styles.container}>
          <DietSwiper />
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    marginTop: '-50%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
});
