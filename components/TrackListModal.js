import React, { Component } from 'react';
import {
  Animated, StyleSheet, Text, View, TouchableOpacity, ScrollView,
} from 'react-native';
import { slideToBottom, slideUpToCenter } from '../animations/slide';
import SingleTrack from '../modules/music/SingleTrack';

export default class TrackListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anims: {
        position: new Animated.Value(-300),
      },
    };
  }

  componentWillMount() {
    slideUpToCenter(this.state.anims, 660);
  }

    toggle = () => {
      slideToBottom(this.state.anims, 660);
      setTimeout(() => {
        this.props.toggle();
      }, 250);
    };

    render() {
      const { position } = this.state.anims;
      return (
        <View style={styles.backdrop}>
          <Animated.View style={[styles.mainContainer, { bottom: position }]}>
            <ScrollView>
              <SingleTrack
                imageSrc={require('../assets/images/bg3.jpg')}
                artist="Artist"
                songTitle="Title of the song"
              />
              <SingleTrack
                imageSrc={require('../assets/images/bg5.jpg')}
                artist="Artist"
                songTitle="Title of the song"
              />
              <SingleTrack
                imageSrc={require('../assets/images/music2.jpeg')}
                artist="Artist"
                songTitle="Title of the song"
              />
              <SingleTrack
                imageSrc={require('../assets/images/plant1.jpeg')}
                artist="Artist"
                songTitle="Title of the song"
              />
              <SingleTrack
                imageSrc={require('../assets/images/playlist22.jpg')}
                artist="Artist"
                songTitle="Title of the song"
              />
              <SingleTrack
                imageSrc={require('../assets/images/playlist.jpeg')}
                artist="Artist"
                songTitle="Title of the song"
              />
              <SingleTrack
                imageSrc={require('../assets/images/playlist.jpeg')}
                artist="Artist"
                songTitle="Title of the song"
              />
            </ScrollView>
            <View style={{ backgroundColor: '#2f212c', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
              <Text style={[styles.closeButton, { top: -17 }]}>_____________________________________________________________</Text>
              <TouchableOpacity style={[styles.closeButton, { height: 30, top: -20 }]} onPress={this.toggle}>
                <Text style={{ color: 'rgba(255, 255, 255, 0.4)', alignSelf: 'center', top: 15 }} onPress={this.toggle}>Close</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: '#121212',
    height: '90%',
    width: '97%',
    position: 'absolute',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  closeButton: {
    color: 'rgba(255, 255, 255, 0.4)',
    alignSelf: 'center',
    width: '100%',
  },
});
