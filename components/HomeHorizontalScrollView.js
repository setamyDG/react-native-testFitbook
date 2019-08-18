import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class HomeHorizontalScrollView extends Component {
  render() {
    return (
      <View style={{ height: '100%', marginTop: '0.5%' }}>
        <View style={styles.mainContainer}>
          <ImageBackground
            imageStyle={{ borderRadius: 25, borderColor: 'rgba(255, 255, 255, 0.4)', borderWidth: 2 }}
            source={this.props.backgroundImageUri}
            style={{ width: '100%', height: '100%' }}
          >
            <SocialIcon type={this.props.typeIcon} light style={{ marginTop: '15%' }} onPress={this.props.onPress1} />
            <SocialIcon type={this.props.typeIcon2} light onPress={this.props.onPress2} />
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 180,
    width: 180,
    marginLeft: 12,
    marginRight: 12,
    borderColor: 'black',
  },
  headerModalText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: 'white',
    marginTop: 30,
  },
  modalText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: 'white',
    marginTop: 35,
  },
  gradient: {
    height: 40,
    width: '50%',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: 'white',
  },

});
