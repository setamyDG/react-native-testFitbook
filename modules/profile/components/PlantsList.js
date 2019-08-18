import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, Slider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient/index';

export default class PlantsList extends Component {
  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <Card
            containerStyle={{
              height: 325,
            }}
            key="card"
            flexDirection="column"
            title={item.title}
            titleStyle={{
              color: 'green',
            }}
            image={item.image}
            imageStyle={{
              height: 150,
              marginTop: -10,
            }}
          >
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
              <LinearGradient
                colors={['#00b3b7', '#084d7a']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 40,
                  width: 120,
                  alignItems: 'center',
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginRight: 210,
                  marginBottom: 90,
                }}
              >
                <Text style={styles.addPlantTxt}>PODLEJ</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#00b3b7', '#084d7a']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 40,
                  width: 120,
                  alignItems: 'center',
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginLeft: -100,
                  marginBottom: 90,
                }}
              >
                <Text
                  style={styles.addPlantTxt}
                  onPress={() => this.props.delete(item.id)}
                >
                  USUN
                </Text>
              </LinearGradient>
            </View>
            <Text>Wilgoć</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={50}
              thumbTintColor="green"
              minimumTrackTintColor="green"
              maximumTrackTintColor="black"
            />
            <Text>Temperatura</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={50}
              thumbTintColor="orange"
              minimumTrackTintColor="orange"
              maximumTrackTintColor="red"
            />
          </Card>
        )}
      />
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
});
