import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


export default class Description extends Component {
  render() {
    return <Text style={styles.text}>{this.props.description}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});
