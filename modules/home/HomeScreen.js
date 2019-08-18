import React, { Component } from 'react';
import {
  StatusBar, StyleSheet, Text, Image, ScrollView, View, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon, AirbnbRating } from 'react-native-elements';
import CustomSwiper from '../../components/CustomSwiper';
import HomeHorizontalScrollView from '../../components/HomeHorizontalScrollView';
import {
  lazarInstagram, lazarFacebook, kramowskiInstagram, kramowskiFacebook, ulisessInstagram, ulisessFacebook, bradleyInstagram, bradleyFacebook,
} from '../../config/const/Links';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackground: (
      <Image
        style={styles.headerImage}
        source={require('../../assets/images/header2.jpg')}
      />
    ),
    title: 'Fitbook',
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
      <Icon
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
        <Icon
          style={{ top: 5 }}
          name="bars"
          size={25}
          color="white"
        />
        <Icon
          style={{ left: 110, top: 160 }}
          name="twitter-square"
          size={35}
          color="white"
        />
        <Icon
          style={{ left: 120, top: 160 }}
          name="facebook-square"
          size={35}
          color="white"
        />
        <Icon
          style={{ left: 130, top: 160 }}
          name="snapchat-square"
          size={35}
          color="white"
        />
      </View>
    ),
  });

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}> Good Morning ! </Text>
        <Icon style={{ left: '65%', top: '-1.75%' }} name="heart" size={15} color="red" />
        <Text style={styles.subtitle}> Great moments and experience only with us </Text>
        <Text style={{ top: -20, color:'white' }}> ______________________________________________________________ </Text>
        <CustomSwiper navigation={this.props.navigation} />
        <Text style={styles.trainStyleText}>TRAIN WITH BESTS AND BE THE BEAST</Text>
        <View style={styles.horizontalView}>
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <HomeHorizontalScrollView
              backgroundImageUri={require('../../assets/images/lazar.jpg')}
              typeIcon="instagram"
              onPress1={() => Linking.openURL(lazarInstagram)}
              typeIcon2="facebook"
              onPress2={() => Linking.openURL(lazarFacebook)}
            />
            <HomeHorizontalScrollView
              backgroundImageUri={require('../../assets/images/kramowski2.jpg')}
              typeIcon="instagram"
              onPress1={() => Linking.openURL(kramowskiInstagram)}
              typeIcon2="facebook"
              onPress2={() => Linking.openURL(kramowskiFacebook)}
            />
            <HomeHorizontalScrollView
              backgroundImageUri={require('../../assets/images/ulisess2.jpg')}
              typeIcon="instagram"
              onPress1={() => Linking.openURL(ulisessInstagram)}
              typeIcon2="facebook"
              onPress2={() => Linking.openURL(ulisessFacebook)}
            />
            <HomeHorizontalScrollView
              backgroundImageUri={require('../../assets/images/martyn.jpg')}
              typeIcon="instagram"
              onPress1={() => Linking.openURL(bradleyInstagram)}
              typeIcon2="facebook"
              onPress2={() => Linking.openURL(bradleyFacebook)}
            />
          </ScrollView>
          <Text style={[styles.description, { top: 7 }]}>Prepare fot the biggest effort in your life with bests trainers in the world.</Text>
        </View>
        <View style={styles.musicView}>
          <Text style={styles.contactRateTxt}>CONTACT & RATE </Text>
          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <SocialIcon
              title="Write an email"
              button
              type="google-plus-official"
              style={{ height: 50, width: 190, borderRadius: 10 }}
            />
            <SocialIcon
              title="Chat on Facebook"
              button
              type="facebook"
              style={{ height: 50, width: 190, borderRadius: 10 }}
            />
          </View>
          <View style={{ marginTop: '5%', height: 120 }}>
            <AirbnbRating
              count={5}
              reviews={['Terrible', 'Bad', 'Good', 'Very Good', 'Amazing']}
              defaultRating={3}
              size={30}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: '-42.5%',
    backgroundColor: '#121212',
  },
  trainStyleText: {
    fontFamily: 'OpenSans-Bold',
    alignSelf: 'center',
    fontSize: 17,
    color: 'white',
    marginTop: '-15%',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  subtitle: {
    fontFamily: 'OpenSans-Italic',
    alignSelf: 'center',
    fontSize: 13,
    top: -15,
    color: 'white',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  horizontalView: {
    height: 230,
    marginTop: 20,
    backgroundColor: '#121212',
  },
  musicView: {
    height: '50%',
    width: '100%',
    marginTop: '15%',
  },
  musicImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  description: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
  },
  contactRateTxt: {
    fontFamily: 'OpenSans-ExtraBold',
    alignSelf: 'center',
    fontSize: 17,
    color: 'white',
    marginTop: '-4%',
  },
});
