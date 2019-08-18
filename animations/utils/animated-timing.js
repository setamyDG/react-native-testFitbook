import { Animated } from 'react-native';

export const animatedTiming = (animatedValue, endValue, duration, delay = 0) => {
  setTimeout(() => {
    Animated.timing(animatedValue, {
      duration,
      toValue: endValue,
    }).start();
  }, delay);
};
