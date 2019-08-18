import { Animated } from 'react-native';

import { DEVICE_HEIGHT } from '../config/styles';

import { animatedTiming } from './utils/animated-timing';

export const slideUpToCenter = (props: { [key: string]: Animated.Value }, height) => {
  animatedTiming(props.position, DEVICE_HEIGHT / 2 - height / 2, 300);
};

export const slideToBottom = (props: { [key: string]: Animated.Value }, height) => {
  animatedTiming(props.position, -(height + 100), 300);
};
