import { Dimensions, StyleSheet } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
