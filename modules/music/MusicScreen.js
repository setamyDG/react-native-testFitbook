import React, { Component } from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text, Image, Modal,
} from 'react-native';
import Icona from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { DEVICE_HEIGHT } from '../../config/styles';
import MusicCard from '../../components/MusicCard';
import TrackListModal from '../../components/TrackListModal';

export default class MusicScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerBackground: (
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/test.jpg')}
        />
      ),
      title: 'Music',
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
        <Icona
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
          <Icona
            style={{ top: 20 }}
            name="bars"
            size={25}
            color="white"
          />
          <Icons
            style={{ left: 105, top: 180 }}
            name="ios-skip-backward"
            size={35}
            color="white"
          />
          <Icons
            style={{ left: 135, top: 180 }}
            name="ios-play"
            size={35}
            color="white"
          />
          <Icons
            style={{ left: 160, top: 180 }}
            name="ios-skip-forward"
            size={35}
            color="white"
          />
          <TouchableOpacity style={{ left: 70, top: 230 }}>
            <Icon
              raised
              name="ios-add"
              type="ionicon"
              color="#9F6F94"
              size={25}
            />
          </TouchableOpacity>
        </View>
      ),
    });

    state = {
      isTracklistModalVisible: false,
    };

    toggleAboutModal = () => {
      this.setState({
        isTracklistModalVisible: !this.state.isTracklistModalVisible,
      });
    };

    render() {
      const { isTracklistModalVisible } = this.state;
      return (
        <View style={styles.container}>
          <MusicCard />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('TrackList')}>
            <Text style={styles.trackListText} onPress={this.toggleAboutModal}>
                SEE YOUR TRACKLIST
            </Text>
          </TouchableOpacity>
          <Modal visible={isTracklistModalVisible} transparent animationType="fade">
            <TrackListModal toggle={this.toggleAboutModal} />
          </Modal>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: DEVICE_HEIGHT,
    backgroundColor: '#121212',
    marginTop: '-50%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  trackListText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#9F6F94',
    fontFamily: 'OpenSans-ItalicBold',
    fontSize: 13,
    marginTop: '5%',
    opacity: 0.4,
  },
});
