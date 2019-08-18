import { Animated } from 'react-native';
import { animatedTiming } from './utils/animated-timing';

export const hideExtendedLogin = (props: { [key: string]: Animated.Value }) => {
  animatedTiming(props.extendedLoginPosition, -290, 600);
};

export const showExtendedLogin = (props: { [key: string]: Animated.Value }) => {
  animatedTiming(props.extendedLoginPosition, 0, 600);
};
