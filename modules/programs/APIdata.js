// przyklad #1
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class APIdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.loadMoviesFromApi();
  }

  loadMoviesFromApi = () =>
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        });
      })
      .catch(error => {
        console.log(error);
      });

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    const movies = this.state.dataSource.map((
      val,
      key, // 2. tutaj nie za bardzo wiem co robi ta linijka
    ) => (
      <View key={key} style={styles.item}>
        <Text>
          {val.title}
          {val.releaseYear}
        </Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        {movies[0]}
        {movies[3]}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
