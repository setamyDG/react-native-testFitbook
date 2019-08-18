import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { DEVICE_HEIGHT } from '../../config/styles';

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation };
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: DEVICE_HEIGHT,
    backgroundColor: '#121212',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  trackListText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'OpenSans-ItalicBold',
    fontSize: 20,
    marginTop: '15%',
  },
});
