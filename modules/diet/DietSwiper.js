import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { DEVICE_WIDTH } from '../../config/styles';
import Monday from './days/Monday';
import Tuesday from './days/Tuesday';
import Wednesday from './days/Wednesday';
import Thursrday from './days/Thursrday';
import Friday from './days/Friday';
import Saturday from './days/Saturday';
import Sunday from './days/Sunday';

export default class DietSwiper extends Component {
  render() {
    return (
      <View>
        <Swiper
          style={styles.container}
          autoplayTimeout={3}
          dotColor="#f50"
          activeDotColor="white"
          paginationStyle={{ top: '-85%' }}
          loop={false}
        >

          <Monday />
          <Tuesday />
          <Wednesday />
          <Thursrday />
          <Friday />
          <Saturday />
          <Sunday />

        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: 1625,
  },
});
