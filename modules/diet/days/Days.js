import React, { Component } from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text, ImageBackground,
} from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../config/styles';
import DietCard from '../DietCard';

export default class Days extends Component {
  _renderUpperView = () => (
    <View style={styles.container}>
      <Text style={styles.dayNameText}>
        {this.props.dayName}
      </Text>
      <TouchableOpacity style={styles.square}>
        <DietCard
          IconaName="water"
          IconaSize={50}
          CardName="ADD WATER"
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.square, { left: '48%', top: '-48.5%' }]}>
        <DietCard
          IconaName="food"
          IconaSize={50}
          CardName="ADD MEAL"
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.square, { marginTop: '-65%' }]}>
        <DietCard
          IconaName="newspaper"
          IconaSize={50}
          CardName="ADD RECIPE"
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.square, { left: '48%', top: '-48.5%' }]}>
        <DietCard
          IconaName="cookie"
          IconaSize={50}
          CardName="ADD SUPPLEMENTS"
        />
      </TouchableOpacity>
    </View>
  );

  _renderBreakfastView = () => (
    <View style={{ height: 200, width: DEVICE_WIDTH }}>
      <View style={{ height: '2%', width: DEVICE_WIDTH, backgroundColor: '#f50' }} />
      <View style={{ height: 200, width: DEVICE_WIDTH, backgroundColor: 'white' }}>
        <ImageBackground style={{ width: DEVICE_WIDTH, height: '100%' }} source={this.props.imageBreakfastSrc} imageStyle={{ opacity: 0.6 }}>
          <Text style={styles.dayMealText}>
            {this.props.dayBreakfast}
          </Text>
        </ImageBackground>
        <View style={{
          height: '2%', width: DEVICE_WIDTH, backgroundColor: '#121212',
        }}
        />
      </View>
    </View>
  );

    _renderLunchView = () => (
      <View style={{ height: 200, width: DEVICE_WIDTH, marginTop: '2%' }}>
        <View style={{ height: 200, width: DEVICE_WIDTH, backgroundColor: 'white' }}>
          <ImageBackground style={{ width: DEVICE_WIDTH, height: '100%' }} source={this.props.imageLunchSrc} imageStyle={{ opacity: 0.6 }}>
            <Text style={styles.dayMealText}>
              {this.props.dayLunch}
            </Text>
          </ImageBackground>
          <View style={{
            height: '2%', width: DEVICE_WIDTH, backgroundColor: '#121212', marginTop: '0%',
          }}
          />
        </View>
      </View>
    );

    _renderDinnerView = () => (
      <View style={{ height: 200, width: DEVICE_WIDTH, marginTop: '1%' }}>
        <View style={{ height: 200, width: DEVICE_WIDTH, backgroundColor: 'white' }}>
          <ImageBackground style={{ width: DEVICE_WIDTH, height: '100%' }} source={this.props.imageDinnerSrc} imageStyle={{ opacity: 0.6 }}>
            <Text style={styles.dayMealText}>
              {this.props.dayDinner}
            </Text>
          </ImageBackground>
          <View style={{
            height: '2%', width: DEVICE_WIDTH, backgroundColor: '#121212', marginTop: '0%',
          }}
          />
        </View>
      </View>
    );

    _renderSnackView = () => (
      <View style={{ height: 200, width: DEVICE_WIDTH, marginTop: '1%' }}>
        <View style={{ height: 200, width: DEVICE_WIDTH, backgroundColor: 'white' }}>
          <ImageBackground style={{ width: DEVICE_WIDTH, height: '100%' }} source={this.props.imageSnackSrc} imageStyle={{ opacity: 0.6 }}>
            <Text style={styles.dayMealText}>
              {this.props.daySnack}
            </Text>
          </ImageBackground>
          <View style={{
            height: '2%', width: DEVICE_WIDTH, backgroundColor: '#121212', marginTop: '0%',
          }}
          />
        </View>
      </View>
    );

    _renderSupperView = () => (
      <View style={{ height: 200, width: DEVICE_WIDTH, marginTop: '1%' }}>
        <View style={{ height: 200, width: DEVICE_WIDTH, backgroundColor: 'white' }}>
          <ImageBackground style={{ width: DEVICE_WIDTH, height: '100%' }} source={this.props.imageSupperSrc} imageStyle={{ opacity: 0.6 }}>
            <Text style={styles.dayMealText}
            >
              {this.props.daySupper}
            </Text>
          </ImageBackground>
          <View style={{
            height: '2%', width: DEVICE_WIDTH, backgroundColor: '#121212', marginTop: '0%',
          }}
          />
        </View>
      </View>
    );

    render() {
      return (
        <View style={{ height: DEVICE_HEIGHT, width: DEVICE_WIDTH }}>
          {this._renderUpperView()}
          {this._renderBreakfastView()}
          {this._renderLunchView()}
          {this._renderDinnerView()}
          {this._renderSnackView()}
          {this._renderSupperView()}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  square: {
    height: '35%',
    width: '45%',
    backgroundColor: '#202020',
    marginTop: '20%',
    marginLeft: '4%',
    borderRadius: 25,
    borderBottomWidth: 15,
    borderBottomColor: 'black',
    borderRightWidth: 15,
    borderRightColor: 'black',
    alignItems: 'center',
  },
  dayNameText: {
    color: 'white',
    fontSize: 20,
    marginTop: '15%',
    marginBottom: '-10%',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'OpenSans-ExtraBold',
  },
  container: {
    height: DEVICE_HEIGHT / 1.3,
    width: DEVICE_WIDTH,
    backgroundColor: '#121212',
  },
  dayMealText: {
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'OpenSans-ExtraBold',
    marginTop: '5%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0, 0.6)',
  },
});
