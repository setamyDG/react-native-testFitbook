import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SingleTrack extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.imageStyle}
          source={this.props.imageSrc}
        />
        <Text style={styles.artistText}>{this.props.artist}</Text>
        <Text style={styles.titleText}>{this.props.songTitle}</Text>
        <View style={styles.iconsView}>
          <Icons name="ios-add-circle-outline" size={30} color="#595959" style={{ paddingBottom: 5 }} />
          <Icon name="delete" size={30} color="#595959" style={{ marginLeft: '-5%' }} />
        </View>
        <Text style={styles.separator}>________________________________________________________</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    marginTop: '5%',
    marginLeft: '5%',
  },
  artistText: {
    color: '#595959',
    alignSelf: 'center',
    marginTop: '-15%',
    fontFamily: 'OpenSans-Italic',
    fontSize: 20,
  },
  titleText: {
    color: '#595959',
    alignSelf: 'center',
    fontFamily: 'OpenSans-Italic',
    fontSize: 15,
  },
  iconsView: {
    marginLeft: '87%',
    marginTop: '-13%',
  },
  separator: {
    color: '#a0a0a0',
    alignSelf: 'center',
    fontFamily: 'OpenSans-Italic',
    fontSize: 15,
  },
});
