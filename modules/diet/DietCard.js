import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import Icona from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DietCard extends Component {
  render() {
    return (
      <View style={[this.props.ViewStyle]}>
        <View style={styles.iconCircle}>
          <Icona name={this.props.IconaName} style={{ alignSelf: 'center', marginTop: '0%' }} size={this.props.IconaSize} color="white" />
        </View>
        <Text style={styles.cardText}>
          {this.props.CardName}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconCircle: {
    backgroundColor: '#f50',
    borderRadius: 45,
    width: 90,
    height: 90,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  cardText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
    marginTop: '15%',
  },
});
