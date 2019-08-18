import React, { Component } from 'react';
import {
  Dimensions, ImageBackground, StyleSheet, View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

import SpringAnimation from '../../animations/image/SpringAnimation';

const backgroundImg = require('../../assets/images/headerHome.jpeg');
const profilePic = require('../../assets/images/95mine.jpg');

export default class Header extends Component {
  render() {
    const springAnimation = <SpringAnimation source={profilePic} style={styles.pic} />;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.headerBackground} source={backgroundImg}>
          <View style={styles.header}>
            <View style={styles.profilePicCircle}>{springAnimation}</View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <SocialIcon type="twitter" />
              <SocialIcon type="facebook" />
              <SocialIcon type="instagram" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  smh: {
    marginTop: 5,
    flex: 1,
    height: 20,
    width: 20,
    backgroundColor: '#5ad',
  },
  headerBackground: {
    height: 270,
    width: '100%',
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  profilePicCircle: {
    width: Dimensions.get('window').height / 4.5 - 2,
    height: Dimensions.get('window').height / 4.5 - 2,
    borderRadius: Dimensions.get('window').height - 4.5,
    borderWidth: 7,
    borderColor: 'rgba(0,0,0, 0.4)',
    alignSelf: 'center',
  },
  pic: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
    opacity: 0.8,
  },
});
