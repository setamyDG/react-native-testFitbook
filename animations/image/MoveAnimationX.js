/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import { Animated, Easing, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class MoveAnimationX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.xPosition, {
      toValue: 100,
      duration: 4500,
      //  easing: Easing.back(),
      //  easing: Easing.cubic(),

      easing: Easing.linear(),
    }).start();
  }

  render() {
    return (
      <Animated.Image
        style={{
          ...this.props.style,
          opacity: this.state.xPosition,
        }}
      >
        {this.props.children}
      </Animated.Image>
    );
  }
}
