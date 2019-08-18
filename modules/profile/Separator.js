import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Separator extends Component {
  render() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: '2%',
    backgroundColor: '#fff',
  },
});
