import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient/index';
import PlantsList from './components/PlantsList';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantsList: [],
    };
  }

  deleteCard = (id) => {
    const { plantsList } = this.state;

    const filteredData = plantsList.filter(item => item.id !== id);
    this.setState({ plantsList: filteredData });
  };

  addCard = () => {
    const newItem = {
      id: this.state.plantsList.length,
      title: `Plant #${this.state.plantsList.length}`,
      image: require('../../assets/images/plant1.jpeg'),
    };

    const array = this.state.plantsList;

    array.push(newItem);

    this.setState({ plantsList: [...array] });
  };

  _renderAddPlantHolder = () => (
    <LinearGradient
      colors={['#116e1c', '#092509']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{
        height: 50,
        width: '100%',
        alignItems: 'center',
        borderRadius: 0,
        justifyContent: 'center',
        marginTop: 0,
      }}
    >
      <Text style={styles.addPlantTxt} onPress={this.addCard}>
        ADD PLANT
      </Text>
    </LinearGradient>
  );

  render() {
    const { plantsList } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#093028', '#237A57']}
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {this._renderAddPlantHolder()}

          <View style={styles.plantsList}>
            <PlantsList data={plantsList} delete={this.deleteCard} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.4)',
  },
  addPlantTxt: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  plantsList: {
    flex: 1,
  },
});
