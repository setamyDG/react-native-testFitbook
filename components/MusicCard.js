import React, { Component } from 'react';
import {
  Image, StyleSheet, View, Text,
} from 'react-native';
import Icona from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';

export default class MusicCard extends Component {
  render() {
    return (
      <View style={styles.square}>
        <Image
          style={styles.songImage}
          source={require('../assets/images/kamikaze.jpg')}
        />
        <Icona
          name="heart-o"
          size={20}
          color="white"
          style={{ top: '-60%', left: '90%' }}
        />
        <Text style={styles.author}>Eminem</Text>
        <Text style={styles.songTitle}>This is title of the song</Text>
        <View style={styles.iconsView}>
          <Icona
            style={{ paddingRight: 50 }}
            name="fast-backward"
            size={20}
            color="white"
          />
          <Icona
            style={{ paddingRight: 50 }}
            name="play"
            size={20}
            color="white"
          />
          <Icona
            name="fast-forward"
            size={20}
            color="white"
          />
        </View>
        <Progress.Bar progress={0.0} size={50} style={styles.progressBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    height: 350,
    width: '80%',
    backgroundColor: '#202020',
    alignSelf: 'center',
    marginTop: '17%',
    borderRadius: 25,
    borderBottomWidth: 15,
    borderBottomColor: 'black',
    borderRightWidth: 15,
    borderRightColor: 'black',
  },
  songImage: {
    width: '50%',
    height: 150,
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white'
    ,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  author: {
    fontSize: 20,
    fontFamily: 'OpenSans-Italic',
    textAlign: 'center',
    color: 'white',
    marginTop: '-3%',
  },
  songTitle: {
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    color: 'white',
    marginTop: '2%',
  },
  progressBar: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '2%',
    borderColor: '#9F6F94',
  },
  iconsView: {
    width: '100%',
    height: '15%',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
