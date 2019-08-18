import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
  ImageBackground, Platform, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

export default class CustomSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation };
  }

  toMusicScreen = () => {
    this.props.navigation.navigate('Music');
  };

  toDietScreen = () => {
    this.props.navigation.navigate('Food');
  };

  toTrainScreen = () => {
    this.props.navigation.navigate('Train');
  };


  render() {
    return (
      <View style={{ height: 400, width: '100%' }}>
        <Swiper
          style={styles.container}
          showsPagination={false}
          autoplayTimeout={3}
          loop
          autoplay
        >
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.toDietScreen()} activeOpacity={0.6}>
              <ImageBackground source={require('../assets/images/diet.jpeg')} style={styles.image} imageStyle={{ borderRadius: 25, borderColor: 'rgba(255, 255, 255, 0.4)', borderWidth: 2 }}>
                <View style={styles.insideImage}>
                  <Text style={styles.title}>
                Diet
                  </Text>
                  <Text style={styles.subtitle}>
                Make sure about best products and supplements
                  </Text>
                  <Text style={styles.description}>
                Remember about eating health food and taking supplements after or before every training
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.toTrainScreen()} activeOpacity={0.6}>
              <ImageBackground source={require('../assets/images/train1.jpeg')} style={styles.image} imageStyle={{ borderRadius: 25, borderColor: 'rgba(255, 255, 255, 0.4)', borderWidth: 2 }}>
                <View style={styles.insideImage}>
                  <Text style={styles.title}>
                Training
                  </Text>
                  <Text style={styles.subtitle}>
                Train with your custom exercises
                  </Text>
                  <Text style={styles.description}>
                Create your own training schedule and let us remind about exercises!
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.toMusicScreen()} activeOpacity={0.6}>
              <ImageBackground source={require('../assets/images/music2.jpeg')} style={styles.image} imageStyle={{ borderRadius: 25, borderColor: 'rgba(255, 255, 255, 0.4)', borderWidth: 2 }}>
                <View style={styles.insideImage}>
                  <Text style={styles.title}>
                Music
                  </Text>
                  <Text style={styles.subtitle}>
                Listen music when you training
                  </Text>
                  <Text style={styles.description}>
                Import your music from your mobile and listen your favorite songs during training
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.toTrainScreen()}>
              <ImageBackground source={require('../assets/images/bg5.jpg')} style={styles.image} imageStyle={{ borderRadius: 25, borderColor: 'rgba(255, 255, 255, 0.4)', borderWidth: 2 }}>
                <View style={styles.insideImage}>
                  <Text style={styles.title}>
                Gym
                  </Text>
                  <Text style={styles.subtitle}>
                Find gym in your living place
                  </Text>
                  <Text style={styles.description}>
                Look at the map and find your best gym in your place. Enjoy to be stronger and more healthy
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 280,
    width: '100%',
    backgroundColor: '#121212',
    alignItems: 'center',
    marginTop: '1%',

  },
  insideImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: 360,
    height: 250,
    borderRadius: 25,
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginTop: '55%',
  },
  subtitle: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'OpenSans-Italic',
    textAlign: 'center',
  },
  description: {
    top: 25,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
  },
});
