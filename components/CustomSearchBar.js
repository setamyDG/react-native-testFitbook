import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import {
  View, StyleSheet,
} from 'react-native';


export default class CustomSearchBar extends Component {
    state = {
      search: '',
    };

    updateSearch = (search) => {
      this.setState({ search });
    };

    render() {
      const { search } = this.state;

      return (
        <View style={styles.container}>
          <SearchBar
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            lightTheme
            inputStyle={{ color: 'black' }}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', top: '-2%',
  },
  containerStyle: {
    width: '88%',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'silver',
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 35,
  },
});
